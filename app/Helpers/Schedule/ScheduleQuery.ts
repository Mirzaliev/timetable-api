import Group from 'App/Models/Group/Group'
import { ScheduleOptions } from 'App/Helpers/Schedule/ScheduleInterfaces'
import { ScheduleDefinitions } from 'App/Helpers/Schedule/ScheduleDefinitions'
import ScheduleException from 'App/Exceptions/ScheduleException'

export class ScheduleQuery extends ScheduleDefinitions {
  /**
   * a query for a baccalaureate's schedule
   * with preload relations for further serialize
   * @protected
   * @param options
   */
  protected static async queryScheduleBaccalaureate(options: ScheduleOptions): Promise<Group> {
    try {
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
    } catch (e) {
      throw new ScheduleException('Not allowed')
    }
  }

  /**
   * query for a timetable for other types of training
   * (master's, postgraduate, etc.) with preload relations
   * for further serialize
   * @protected
   * @param options
   */
  protected static async queryScheduleOtherTrainingType(options: ScheduleOptions): Promise<Group> {
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
}
