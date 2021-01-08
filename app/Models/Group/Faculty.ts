import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Department from 'App/Models/Group/Department'
// import Group from 'App/Models/Group/Group'

export default class Faculty extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public abbreviation: string

  @column()
  public name: string

  @hasMany(() => Department)
  public chair: HasMany<typeof Department>

  /**@hasMany(() => Group)
  public group: HasMany<typeof Group>**/
}
