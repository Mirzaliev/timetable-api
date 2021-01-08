import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class EntitiesForScheduleAndExams extends BaseSchema {
  public async up() {
    this.schema.createTable('lessons', (table) => {
      table.increments('id')
      table.string('name', 200)
    })
    this.schema.createTable('lesson_numbers', (table) => {
      table.increments('id')
      table.integer('number', 2).unsigned().notNullable()
      table.string('start_and_end_time', 15).notNullable()
    })
    this.schema.createTable('lesson_types', (table) => {
      table.increments('id')
      table.string('name', 15).notNullable()
    })
    this.schema.createTable('days', (table) => {
      table.increments('id')
      table.string('name', 11).notNullable().index()
    })
    this.schema.createTable('classrooms', (table) => {
      table.increments('id')
      table.string('abbreviation', 5).notNullable().index()
      table.string('address', 150).nullable()
    })
    this.schema.createTable('sub_groups', (table) => {
      table.increments('id')
      table.string('name', 11).notNullable()
    })
    this.schema.createTable('week_types', (table) => {
      table.increments('id')
      table.string('name', 8).nullable()
    })
  }

  public async down() {
    this.schema.dropTable('week_types')
    this.schema.dropTable('lessons')
    this.schema.dropTable('lesson_numbers')
    this.schema.dropTable('lesson_types')
    this.schema.dropTable('days')
    this.schema.dropTable('classrooms')
    this.schema.dropTable('sub_groups')
  }
}
