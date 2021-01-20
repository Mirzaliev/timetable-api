import { Exception } from '@poppinss/utils'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

/*
|--------------------------------------------------------------------------
| Exception
|--------------------------------------------------------------------------
|
| The Exception class imported from `@adonisjs/core` allows defining
| a status code and error code for every exception.
|
| @example
| new ScheduleException('message', 500, 'E_RUNTIME_EXCEPTION')
|
*/
export default class ScheduleException extends Exception {
  constructor(message: string, code: number) {
    super(message, code)
  }

  /**
   * Implement the handle method to manually handle this exception.
   * Otherwise it will be handled by the global exception handler.
   */
  public async handle(error: this, { response }: HttpContextContract) {
    response.status(error.status).json({ error: error.message })
  }
}
