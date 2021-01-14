import { BaseModel, hasMany, column, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Schedule from 'App/Models/Schedule'

export default class Classroom extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public abbreviation: string

  @hasMany(() => Schedule)
  public schedule: HasMany<typeof Schedule>
}
