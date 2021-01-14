import { BaseModel, belongsTo, column, BelongsTo, computed } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import WeekType from 'App/Models/OtherModels/WeekType'
import Group from 'App/Models/Group/Group'
import Lesson from 'App/Models/OtherModels/Lesson'
import LessonNumber from 'App/Models/OtherModels/LessonNumber'
import LessonType from 'App/Models/OtherModels/LessonType'
import Day from 'App/Models/OtherModels/Day'
import Classroom from 'App/Models/OtherModels/Classroom'
import Teacher from 'App/Models/Teacher/Teacher'
import SubGroup from 'App/Models/OtherModels/SubGroup'

export default class Schedule extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.date()
  public timing: DateTime

  @column()
  public exam: boolean

  @column()
  public weekTypeId: number

  @column()
  public groupId: number

  @column()
  public lessonId: number

  @column()
  public lessonNumberId: number

  @column()
  public lessonTypeId: number

  @column()
  public dayId: number

  @column()
  public classroomId: number

  @column()
  public teacherId: number

  @column()
  public subGroupId: number

  @computed()
  public get _weekTypeName() {
    return this.weekType.name
  }

  @computed()
  public get _lessonName() {
    return this.lesson.name
  }

  @computed()
  public get _lessonNumber() {
    return this.lessonNumber.number
  }

  @computed()
  public get _lessonTime() {
    return this.lessonNumber.startAndEndTime
  }

  @computed()
  public get _lessonType() {
    return this.lessonType.name
  }

  @computed()
  public get _lessonDay() {
    return this.day.name
  }

  @computed()
  public get _classroom() {
    return this.classroom.abbreviation
  }

  @computed()
  public get _teacher() {
    return this.teacher.degree.abbreviation + ' ' + this.teacher.fullName
  }

  @belongsTo(() => Group)
  public group: BelongsTo<typeof Group>

  @belongsTo(() => WeekType)
  public weekType: BelongsTo<typeof WeekType>

  @belongsTo(() => Lesson)
  public lesson: BelongsTo<typeof Lesson>

  @belongsTo(() => LessonNumber)
  public lessonNumber: BelongsTo<typeof LessonNumber>

  @belongsTo(() => LessonType)
  public lessonType: BelongsTo<typeof LessonType>

  @belongsTo(() => Day)
  public day: BelongsTo<typeof Day>

  @belongsTo(() => Classroom)
  public classroom: BelongsTo<typeof Classroom>

  @belongsTo(() => Teacher)
  public teacher: BelongsTo<typeof Teacher>

  @belongsTo(() => SubGroup)
  public subGroup: BelongsTo<typeof SubGroup>
}
