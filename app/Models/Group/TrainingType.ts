import { BaseModel, belongsTo, column, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Group from 'App/Models/Group/Group'

export default class TrainingType extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @belongsTo(() => Group)
  public group: BelongsTo<typeof Group>
}
