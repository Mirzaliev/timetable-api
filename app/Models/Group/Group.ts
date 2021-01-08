import { BaseModel, column, HasOne, hasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Chair from 'App/Models/Group/Chair'
import TrainingType from 'App/Models/Group/TrainingType'

export default class Group extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public chairId: number

  @column()
  public trainingTypeId: number

  @column()
  public abbreviation: string

  @belongsTo(() => Chair)
  public chair: BelongsTo<typeof Chair>

  @hasOne(() => TrainingType)
  public trainingType: HasOne<typeof TrainingType>
}
