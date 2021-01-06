import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class LessonNumbers extends BaseSchema {
  protected tableName = 'lesson_numbers'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
