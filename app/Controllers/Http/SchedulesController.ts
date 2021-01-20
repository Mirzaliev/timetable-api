import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ScheduleResponse } from 'App/Helpers/Schedule/ScheduleResponse'
import { ScheduleOptions } from 'App/Helpers/Schedule/ScheduleInterfaces'

export default class SchedulesController {
  /**
   * @param params
   * @param request
   */
  public async schedule({ params, request }: HttpContextContract) {
    const options: ScheduleOptions = {
      group: decodeURI(params.group).toString(),
      weekTypeId: parseInt(request.get().weekTypeId) || false,
      intervalDate: decodeURI(request.get().dateBetween).toString() || 'week',
      groupId: 0,
    }
    return ScheduleResponse.getSchedule(options)
  }
}
