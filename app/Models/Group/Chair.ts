import { BaseModel, belongsTo, column, HasOne, hasOne, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Faculty from 'App/Models/Group/Faculty'
import Group from 'App/Models/Group/Group'

export default class Chair extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public facultyId: number

  @column()
  public abbreviation: string

  @column()
  public name: string

  @belongsTo(() => Faculty)
  public faculty: BelongsTo<typeof Faculty>

  @hasOne(() => Group)
  public group: HasOne<typeof Group>
}
