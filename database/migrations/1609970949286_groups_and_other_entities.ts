import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Groups extends BaseSchema {
  public async up() {
    this.schema.createTable('faculties', (table) => {
      table.increments('id')
      table.string('abbreviation', 8).unique().notNullable().index()
      table.string('name', 120)
    })
    /**
     * Кафедры факультета
     */
    this.schema.createTable('department', (table) => {
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
    this.schema.createTable('training_forms', (table) => {
      table.increments('id')
      table.string('name', 15).notNullable()
    })
    this.schema.createTable('groups', (table) => {
      table.increments('id')
      table.integer('course', 1).unsigned().nullable()
      table
        .integer('department_id')
        .unsigned()
        .nullable()
        .comment('Группа должна иметь кафедру, но в этой программе важен факультет')
      /**
      table
        .integer('faculty_id')
        .unsigned()
        .notNullable()
        .comment('Институт магистратуры и аспирантуры не имуеют кафедр, поэтому отдельнгая связь')
       **/
      table
        .integer('training_forms_id')
        .unsigned()
        .notNullable()
        .comment('Форма обучения: ОЧНАЯ или ОЧНО-ЗАОЧНАЯ ')
      table.integer('training_type_id').unsigned().notNullable()
      table.string('abbreviation', 10).unique().notNullable().index()
      /** table.foreign('faculty_id').references('id').inTable('faculties')**/
      table.foreign('department_id').references('id').inTable('department')
      table.foreign('training_type_id').references('id').inTable('training_types')
      table.foreign('training_forms_id').references('id').inTable('training_forms')
    })
  }

  public async down() {
    this.schema.dropTable('groups')
    this.schema.dropTable('training_types')
    this.schema.dropTable('training_forms')
    this.schema.dropTable('department')
    this.schema.dropTable('faculties')
  }
}
