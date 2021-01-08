import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Chair from 'App/Models/Group/Chair'

export default class Faculty extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public abbreviation: string

  @column()
  public name: string

  @hasOne(() => Chair)
  public chair: HasOne<typeof Chair>
}
