import { BaseModel, hasMany, column, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Schedule from 'App/Models/Schedule'

export default class LessonNumber extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public number: number

  @column()
  public startAndEndTime: string

  @hasMany(() => Schedule)
  public schedule: HasMany<typeof Schedule>
}
