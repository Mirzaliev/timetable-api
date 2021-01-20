import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class EvenOddWeek extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public parity: number

  @column.date()
  public startOfWeek: DateTime
}
