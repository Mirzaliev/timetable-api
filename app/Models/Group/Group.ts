import { BaseModel, column, HasOne, hasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Department from 'App/Models/Group/Department'
import TrainingType from 'App/Models/Group/TrainingType'
import TrainingForm from 'App/Models/Group/TrainingForm'
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

  /** @belongsTo(() => Faculty)
  public faculty: BelongsTo<typeof Faculty>**/

  @hasOne(() => TrainingType)
  public trainingType: HasOne<typeof TrainingType>

  @hasOne(() => TrainingForm)
  public trainingForm: HasOne<typeof TrainingForm>
}
