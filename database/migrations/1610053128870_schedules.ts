import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Schedules extends BaseSchema {
  protected tableName = 'schedules'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.date('timing').comment('Дата проведения урока или экзамена').nullable()
      table.boolean('exam').nullable()
      table
        .integer('week_type_id')
        .unsigned()
        .nullable()
        .comment('Четная или нечетная неделя, только для бакалавриата')
      table.integer('group_id').unsigned().notNullable()
      table.integer('lesson_id').unsigned().notNullable()
      table.integer('lesson_number_id').unsigned().notNullable().comment('Номер урока')
      table.integer('lesson_type_id').unsigned().nullable().comment('Практика или лекция или ЗАЧЕТ')
      table
        .integer('day_id')
        .unsigned()
        .nullable()
        .comment(
          'Понедельник, вторник... для магистратуры и аспирантуры день недели не указывается, поэтому поле по умолчанию может null'
        )
      table.integer('classroom_id').unsigned().notNullable().comment('аудитория урока')
      table.integer('teacher_id').unsigned().notNullable()
      table
        .integer('sub_group_id')
        .unsigned()
        .nullable()
        .comment('некоторые пары, иногда делятся на подгруппы')
      //
      table.foreign('week_type_id').references('id').inTable('week_types')
      table.foreign('group_id').references('id').inTable('groups')
      table.foreign('lesson_id').references('id').inTable('lessons')
      table.foreign('lesson_number_id').references('id').inTable('lesson_numbers')
      table.foreign('lesson_type_id').references('id').inTable('lesson_types')
      table.foreign('day_id').references('id').inTable('days')
      table.foreign('classroom_id').references('id').inTable('classrooms')
      table.foreign('teacher_id').references('id').inTable('teachers')
      table.foreign('sub_group_id').references('id').inTable('sub_groups')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
