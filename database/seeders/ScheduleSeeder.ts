import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Group from 'App/Models/Group/Group'
import FakeData from 'Database/Fake/FakeData'
import Schedule from 'App/Models/Schedule'

export default class ScheduleSeeder extends BaseSeeder {
  public async run() {
    Schedule.truncate(false)
    const group1 = await Group.find(1)
    // @ts-ignore
    await group1.related('schedule').updateOrCreateMany(FakeData.get('schedules_ИБ-311'))
    const group2 = await Group.find(2)
    // @ts-ignore
    await group2.related('schedule').updateOrCreateMany(FakeData.get('schedules_ИБZ-311'))
  }
}
