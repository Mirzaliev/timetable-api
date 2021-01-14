import { HasOne, hasOne, column, BaseModel } from '@ioc:Adonis/Lucid/Orm'
import Teacher from 'App/Models/Teacher/Teacher'

export default class AcademicDegree extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public abbreviation: string

  @column()
  public name: string

  @hasOne(() => Teacher)
  public teacher: HasOne<typeof Teacher>
}
