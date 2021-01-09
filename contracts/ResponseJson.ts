import Faculty from 'App/Models/Group/Faculty'
import { FacultyGroupsList, GroupsList } from 'Contracts/ResponseJsonTypesInterface'

export class ResponseJson {
  /**
   *
   * @param query
   */
  public static getFacultyGroups(query: Faculty): Array<FacultyGroupsList> {
    const result: Array<FacultyGroupsList> = []
    const groups: Array<GroupsList> = []

    query.department.map((dep) => {
      dep.groups.map((g) => {
        groups.push(g)
      })
    })
    result.push({
      id: query.id,
      abbreviation: query.abbreviation,
      name: query.name,
      o: groups.filter((g) => g.trainingFormId === 1),
      zo: groups.filter((g) => g.trainingFormId === 2),
      ozo: groups.filter((g) => g.trainingFormId === 3),
    })
    return result
  }
}
