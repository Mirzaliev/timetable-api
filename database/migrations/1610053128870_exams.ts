import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Exams extends BaseSchema {
  protected tableName = 'exams'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.date('exam_date')
      table.integer('group_id').unsigned().notNullable()
      table.integer('lesson_id').unsigned().notNullable()
      table.integer('lesson_number_id').unsigned().notNullable()
      table.integer('lesson_type_id').unsigned().notNullable()
      table.integer('classroom_id').unsigned().notNullable()
      table.integer('teacher_id').unsigned().notNullable()
      table
        .integer('sub_group_id')
        .unsigned()
        .nullable()
        .comment('некоторые пары, иногда делятся на подгруппы')
      table.foreign('group_id').references('id').inTable('groups')
      table.foreign('lesson_id').references('id').inTable('lessons')
      table.foreign('lesson_number_id').references('id').inTable('lesson_numbers')
      table.foreign('lesson_type_id').references('id').inTable('lesson_types')
      table.foreign('classroom_id').references('id').inTable('classrooms')
      table.foreign('teacher_id').references('id').inTable('teachers')
      table.foreign('sub_group_id').references('id').inTable('sub_groups')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
