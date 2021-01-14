import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import SubGroup from 'App/Models/OtherModels/SubGroup'
import WeekType from 'App/Models/OtherModels/WeekType'
import Lesson from 'App/Models/OtherModels/Lesson'
import LessonNumber from 'App/Models/OtherModels/LessonNumber'
import Classroom from 'App/Models/OtherModels/Classroom'
import Day from 'App/Models/OtherModels/Day'
import LessonType from 'App/Models/OtherModels/LessonType'
import AcademicDegree from 'App/Models/Teacher/AcademicDegree'
import Teacher from 'App/Models/Teacher/Teacher'
import FakeData from 'Database/Fake/FakeData'

export default class ScheduleRelatedTablesSeeder extends BaseSeeder {
  public async run() {
    await SubGroup.updateOrCreateMany('name', FakeData.get('sub_groups'))
    await WeekType.updateOrCreateMany('name', FakeData.get('week_types'))
    await Lesson.updateOrCreateMany('name', FakeData.get('lessons'))
    await LessonNumber.updateOrCreateMany('number', FakeData.get('lesson_numbers'))
    await Classroom.updateOrCreateMany('abbreviation', FakeData.get('classrooms'))
    await Day.updateOrCreateMany('name', FakeData.get('days'))
    await LessonType.updateOrCreateMany('name', FakeData.get('lesson_types'))
    await AcademicDegree.updateOrCreateMany('abbreviation', FakeData.get('academic_degrees'))
    await Teacher.updateOrCreateMany('fullName', FakeData.get('teachers'))
  }
}
