import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Groups extends BaseSchema {
  public async up() {
    this.schema.createTable('faculties', (table) => {
      table.increments('id')
      table.string('abbreviation', 8).unique().notNullable().index()
      table.string('name', 120)
    })
    this.schema.createTable('chairs', (table) => {
      table.increments('id')
      table.integer('faculty_id').unsigned().nullable()
      table.string('abbreviation', 8).unique().notNullable().index()
      table.string('name', 120)
      table.foreign('faculty_id').references('id').inTable('faculties')
    })
    this.schema.createTable('training_types', (table) => {
      table.increments('id')
      table.string('name', 15).notNullable()
    })
    this.schema.createTable('groups', (table) => {
      table.increments('id')
      table.integer('chair_id').unsigned().notNullable()
      table.integer('training_type_id').unsigned().notNullable()
      table.string('abbreviation', 10).unique().notNullable().index()
      table.foreign('chair_id').references('id').inTable('chairs')
      table.foreign('training_type_id').references('id').inTable('training_types')
    })
  }

  public async down() {
    this.schema.dropTable('groups')
    this.schema.dropTable('training_types')
    this.schema.dropTable('chairs')
    this.schema.dropTable('faculties')
  }
}
