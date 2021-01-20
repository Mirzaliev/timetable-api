// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Faculty from 'App/Models/Group/Faculty'
import { ScheduleResponse } from 'App/Helpers/Schedule/ScheduleResponse'
import Group from 'App/Models/Group/Group'

export default class UsersController {
  public async index() {
    const query = await Faculty.query()
      .where('id', 1)
      .preload('department', (dep) => {
        return dep.preload('groups')
      })
      .firstOrFail()
    // query.forEach((query) => {})
    return ScheduleResponse.getFacultyGroups(query)
  }

  public async schedule() {
    const group = await Group.query()
      .where('id', 1)
      .preload('trainingType')
      .preload('trainingForm')
      .preload('schedule', (schedule) => {
        schedule
          .whereNull('exam')
          .andWhere('weekTypeId', 1)
          .preload('weekType')
          .preload('lesson')
          .preload('lessonNumber')
          .preload('lessonType')
          .preload('day')
          .preload('classroom')
          .preload('teacher', (teacher) => {
            teacher.preload('degree')
          })
          .preload('subGroup')
      })
      .firstOrFail()
    return ScheduleResponse.getSerializeSchedule(group)
    // return query.serialize({
    //   fields: ['id', 'abbreviation', ''],
    //   relations: {
    //     schedule: {
    //       fields: [
    //         'id',
    //         '_weekTypeName',
    //         '_lessonName',
    //         '_lessonNumber',
    //         '_lessonTime',
    //         '_lessonType',
    //         '_lessonDay',
    //         '_classroom',
    //         '_teacher',
    //       ],
    //       relations: {
    //         weekType: { fields: [] },
    //         lesson: { fields: [] },
    //         lessonNumber: { fields: [] },
    //         lessonType: { fields: [] },
    //         day: { fields: [] },
    //         classroom: { fields: [] },
    //         teacher: { fields: [], relations: { degree: { fields: [] } } },
    //       },
    //     },
    //   },
    // })
  }
}
