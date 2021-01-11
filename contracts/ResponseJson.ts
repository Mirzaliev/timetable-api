import Faculty from 'App/Models/Group/Faculty'
import { FacultyGroupsList, GroupsList, TrainingForms } from 'Contracts/ResponseJsonTypesInterface'
// // const MAP_VALUES = require('lodash/mapValues')
// const GROUP_BY = require('lodash/groupBy')
// const ToPairs = require('lodash/toPairs')
// const chain = require('lodash/chain')
// const zipObject = require('lodash/zipObject')
// const map = require('lodash/map')
// const filter = require('lodash/filter')
// // const OMIT = require('lodash/fp/omit')
const lodash = require('lodash')

export class ResponseJson {
  /**
   * this methods return filtered data with groups
   * @param faculty
   * @return Array<FacultyGroupsList>
   */
  public static getFacultyGroups(faculty: Faculty): Array<FacultyGroupsList> {
    const result: Array<FacultyGroupsList> = []
    const groups: Array<GroupsList> = []

    faculty.department.map((dep) => {
      dep.groups.map((g) => {
        groups.push(g)
      })
    })

    result.push({
      id: faculty.id,
      abbreviation: faculty.abbreviation,
      name: faculty.name,
      fullTime: this.getWithGroupByCourse(groups, TrainingForms.FullTimeTypeId),
      partTime: this.getWithGroupByCourse(groups, TrainingForms.PartTimeTypeId),
      fullAndPartTime: this.getWithGroupByCourse(groups, TrainingForms.FullAndPartTimeTypeId),
    })
    return result
  }

  /**
   *
   * @param groups
   * @param trainingFormId
   */
  private static getWithGroupByCourse(groups: Array<GroupsList>, trainingFormId: number) {
    return lodash(groups)
      .filter((x) => x.trainingFormId === trainingFormId)
      .groupBy('course')
      .toPairs()
      .map((currentData) => {
        return lodash.zipObject(['course', 'groups'], currentData)
      })
      .value()
  }
}
