import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Faculty from 'App/Models/Group/Faculty'
import Department from 'App/Models/Group/Department'
import TrainingType from 'App/Models/Group/TrainingType'
import TrainingForm from 'App/Models/Group/TrainingForm'
import Group from 'App/Models/Group/Group'
import FakeData from 'Database/Fake/FakeData'

export default class GroupsAndRelatedTableSeeder extends BaseSeeder {
  public async run() {
    await Faculty.updateOrCreateMany('abbreviation', FakeData.get('faculties'))
    await Department.updateOrCreateMany('abbreviation', FakeData.get('department'))
    await TrainingType.updateOrCreateMany('name', FakeData.get('trainingTypes'))
    await TrainingForm.updateOrCreateMany('name', FakeData.get('trainingForms'))
    await Group.updateOrCreateMany('abbreviation', FakeData.get('groups'))
  }
}
