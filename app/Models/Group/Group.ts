import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Department from 'App/Models/Group/Department'
import TrainingType from 'App/Models/Group/TrainingType'
import TrainingForm from 'App/Models/Group/TrainingForm'
import Schedule from 'App/Models/Schedule'
// import Faculty from 'App/Models/Group/Faculty'

export default class Group extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public departmentId: number

  @column()
  public trainingTypeId: number

  @column()
  public trainingFormId: number

  @column()
  public abbreviation: string

  @column()
  public course: number

  @belongsTo(() => Department)
  public department: BelongsTo<typeof Department>

  @belongsTo(() => TrainingType)
  public trainingType: BelongsTo<typeof TrainingType>

  @belongsTo(() => TrainingForm)
  public trainingForm: BelongsTo<typeof TrainingForm>

  @hasMany(() => Schedule)
  public schedule: HasMany<typeof Schedule>
}
