import { BaseModel, belongsTo, column, HasMany, hasMany, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Faculty from 'App/Models/Group/Faculty'
import Group from 'App/Models/Group/Group'

export default class Department extends BaseModel {
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

  @hasMany(() => Group)
  public group: HasMany<typeof Group>
}
