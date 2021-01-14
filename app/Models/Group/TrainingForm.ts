import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Group from 'App/Models/Group/Group'

export default class TrainingForm extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @hasMany(() => Group)
  public group: HasMany<typeof Group>
}
