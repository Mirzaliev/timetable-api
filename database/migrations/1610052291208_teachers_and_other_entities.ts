import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Teachers extends BaseSchema {
  public async up() {
    this.schema.createTable('academic_degrees', (table) => {
      table.increments('id')
      table.string('abbreviation', 15).unique().notNullable()
      table.string('name', 40).notNullable()
    })
    this.schema.createTable('teachers', (table) => {
      table.increments('id')
      table.string('full_name', 100).notNullable().index()
      table.integer('academic_degree_id').unsigned().nullable()
      table.foreign('academic_degree_id').references('id').inTable('academic_degrees')
    })
  }

  public async down() {
    this.schema.dropTable('teachers')
    this.schema.dropTable('academic_degrees')
  }
}
