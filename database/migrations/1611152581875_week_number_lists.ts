import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class WeekNumberLists extends BaseSchema {
  protected tableName = 'even_odd_weeks'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.date('start_of_week').index()
      table.integer('parity', 1).index().comment('1 - odd 2 - even')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
