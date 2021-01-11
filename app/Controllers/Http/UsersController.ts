// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Faculty from 'App/Models/Group/Faculty'
import { ResponseJson } from 'Contracts/ResponseJson'

export default class UsersController {
  public async index() {
    const query = await Faculty.query()
      .where('id', 1)
      .preload('department', (dep) => {
        return dep.preload('groups')
      })
      .firstOrFail()
    // query.forEach((query) => {})
    return ResponseJson.getFacultyGroups(query)
  }
}
