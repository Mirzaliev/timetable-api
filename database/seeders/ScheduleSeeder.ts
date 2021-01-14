import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import FakeData from 'Database/Fake/FakeData'

export default class ScheduleSeeder extends BaseSeeder {
  public async run() {
    //const group = await Group.find(o + 1)
    //await group.related('schedule').create()
    console.log(FakeData.get('sub_groups'))
  }
}
