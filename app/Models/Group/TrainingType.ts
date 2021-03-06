import { BaseModel, hasMany, column, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Group from 'App/Models/Group/Group'

export default class TrainingType extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @hasMany(() => Group)
  public group: HasMany<typeof Group>
}
