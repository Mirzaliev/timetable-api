import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Teachers extends BaseSchema {
  public async up() {
    this.schema.createTable('ranks', (table) => {
      table.increments('id')
      table.string('abbreviation', 15).unique().notNullable()
      table.string('name', 50).notNullable()
    })
    this.schema.createTable('positions', (table) => {
      table.increments('id')
      table.string('name', 100).notNullable()
    })
    this.schema.createTable('academic_degrees', (table) => {
      table.increments('id')
      table.string('abbreviation', 15).unique().notNullable()
      table.string('name', 20).notNullable()
    })
    this.schema.createTable('teachers', (table) => {
      table.increments('id')
      table.string('full_name', 100).notNullable().index()
      table.integer('rank_id').unsigned().notNullable()
      table.integer('position_id').unsigned().notNullable()
      table.integer('academic_degree_id').unsigned().notNullable()
      table.foreign('rank_id').references('id').inTable('ranks')
      table.foreign('position_id').references('id').inTable('positions')
      table.foreign('academic_degree_id').references('id').inTable('academic_degrees')
    })
  }

  public async down() {
    this.schema.dropTable('teachers')
    this.schema.dropTable('academic_degrees')
    this.schema.dropTable('positions')
    this.schema.dropTable('ranks')
  }
}
