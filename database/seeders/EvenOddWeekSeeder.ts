import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import EvenOddWeek from 'App/Models/OtherModels/EvenOddWeek'
import { DateObject, DateTime } from 'luxon'

export default class EvenOddWeekSeederSeeder extends BaseSeeder {
  public async run() {
    /**
     * What week (1 -odd or 2 - even) we start the school year
     */
    let startParity = 1
    /**
     * When do we start the training year
     */
    let sTY: DateObject = {
      year: 2020,
      month: 9,
      day: 1,
    }
    await EvenOddWeek.truncate()
    while (sTY.month !== 3) {
      const startOfWeekTemp = DateTime.local(sTY.year, sTY.month, sTY.day).startOf('week')
      await EvenOddWeek.create({
        parity: startParity,
        startOfWeek: startOfWeekTemp,
      })
      startParity === 1 ? (startParity = 2) : (startParity = 1)
      sTY = startOfWeekTemp.plus({ week: 1 }).toObject()
    }
  }
}
