import { DateTime } from 'luxon'
import EvenOddWeek from 'App/Models/OtherModels/EvenOddWeek'

export class ScheduleDefinitions {
  /**
   * Specifies the interval of time depending on the
   * value of the intervalDate parameter
   * @protected
   * @param intervalDate
   */
  protected static defineIntervalDate(intervalDate: string): Array<string> {
    if (intervalDate === 'week') {
      return [DateTime.local().toSQLDate(), DateTime.local().plus({ week: 1 }).toSQLDate()]
    }
    return [DateTime.local().toSQLDate(), DateTime.local().plus({ week: 1 }).toSQLDate()]
  }

  /**
   * Define week parity(1 - odd. 2 - even) or get from database
   * @protected
   * @param weekTypeId
   */
  protected static async defineWeekParity(weekTypeId: number | boolean): Promise<number> {
    if (weekTypeId && (weekTypeId === 1 || weekTypeId === 2)) {
      return weekTypeId
    }
    const localDate = DateTime.local().startOf('week').toSQLDate()
    const week = await EvenOddWeek.findByOrFail('startOfWeek', localDate)
    return week.parity
  }
}
