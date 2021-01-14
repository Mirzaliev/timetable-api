import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import AcademicDegree from 'App/Models/Teacher/AcademicDegree'

export default class Teacher extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public fullName: string

  @column()
  public academicDegreeId: number

  @belongsTo(() => AcademicDegree)
  public degree: BelongsTo<typeof AcademicDegree>
}
