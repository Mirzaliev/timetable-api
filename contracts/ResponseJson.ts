import Faculty from 'App/Models/Group/Faculty'
import { FacultyGroupsList, GroupsList, TrainingForms } from 'Contracts/ResponseJsonTypesInterface'
import Group from 'App/Models/Group/Group'
import { ScheduleSerialize } from 'Contracts/Serialize/ScheduleSerialize'

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
      fullTime: ScheduleSerialize.groupByGroupsCourse(groups, TrainingForms.FullTimeTypeId),
      partTime: ScheduleSerialize.groupByGroupsCourse(groups, TrainingForms.PartTimeTypeId),
      fullAndPartTime: ScheduleSerialize.groupByGroupsCourse(
        groups,
        TrainingForms.FullAndPartTimeTypeId
      ),
    })
    return result
  }

  /**
   *
   * @param group
   */
  public static getSerializeSchedule(group: Group) {
    return {
      id: group.id,
      course: group.course,
      abbreviation: group.abbreviation,
      trainingTypeId: group.trainingType.id,
      trainingType: group.trainingType.name,
      trainingFormId: group.trainingForm.id,
      trainingForm: group.trainingForm.name,
      weekType: group.schedule[0].weekType ? group.schedule[0].weekType.name : '',
      timetable: ScheduleSerialize.serializeGroupSchedule(group.schedule),
    }
  }
}
