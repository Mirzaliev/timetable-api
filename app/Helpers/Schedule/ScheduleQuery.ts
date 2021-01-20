import Group from 'App/Models/Group/Group'
import { ScheduleOptions } from 'App/Helpers/Schedule/ScheduleInterfaces'
import { DateTime } from 'luxon'
import EvenOddWeek from 'App/Models/OtherModels/EvenOddWeek'

export class ScheduleQuery {
  /**
   * a query for a baccalaureate's schedule
   * with preload relations for further serialize
   * @protected
   * @param options
   */
  protected static async queryScheduleBaccalaureate(options: ScheduleOptions): Promise<Group> {
    return await Group.query()
      .where('id', options.groupId)
      .preload('trainingType')
      .preload('trainingForm')
      .preload('schedule', async (schedule) => {
        schedule
          .whereNull('exam')
          .andWhere('weekTypeId', await this.defineWeekParity(options.weekTypeId))
          .preload('weekType')
          .preload('lesson')
          .preload('lessonNumber')
          .preload('lessonType')
          .preload('day')
          .preload('classroom')
          .preload('teacher', (teacher) => {
            teacher.preload('degree')
          })
          .preload('subGroup')
      })
      .firstOrFail()
  }

  /**
   * query for a timetable for other types of training
   * (master's, postgraduate, etc.) with preload relations
   * for further serialize
   * @protected
   * @param options
   */
  protected static async queryScheduleOtherTrainingType(options: ScheduleOptions): Promise<Group> {
    console.log(this.defineIntervalDate(options.intervalDate))
    return await Group.query()
      .where('id', options.groupId)
      .preload('trainingType')
      .preload('trainingForm')
      .preload('schedule', (schedule) => {
        return (
          schedule
            .whereNull('exam')
            // @ts-ignore
            .andWhereBetween('timing', this.defineIntervalDate(options.intervalDate))
            .preload('lesson')
            .preload('lessonNumber')
            .preload('lessonType')
            .preload('day')
            .preload('classroom')
            .preload('teacher', (teacher) => {
              teacher.preload('degree')
            })
            .preload('subGroup')
        )
      })
      .firstOrFail()
  }

  /**
   * Specifies the interval of time depending on the
   * value of the intervalDate parameter
   * @private
   * @param intervalDate
   */
  private static defineIntervalDate(intervalDate: string): Array<string> {
    if (intervalDate === 'week') {
      return [DateTime.local().toSQLDate(), DateTime.local().plus({ week: 1 }).toSQLDate()]
    }
    return [DateTime.local().toSQLDate(), DateTime.local().plus({ week: 1 }).toSQLDate()]
  }

  private static async defineWeekParity(weekTypeId: number | boolean): Promise<number> {
    if (weekTypeId && (weekTypeId === 1 || weekTypeId === 2)) {
      return weekTypeId
    }
    const localDate = DateTime.local().startOf('week').toSQLDate()
    const week = await EvenOddWeek.findByOrFail('startOfWeek', localDate)
    return week.parity
  }
}
