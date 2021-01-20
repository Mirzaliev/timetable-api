import Faculty from 'App/Models/Group/Faculty'
import {
  FacultyGroupsList,
  GroupsList,
  ScheduleOptions,
  TrainingForms,
  TrainingTypes,
} from 'App/Helpers/Schedule/ScheduleInterfaces'
import { ScheduleSerialize } from 'App/Helpers/Schedule/ScheduleSerialize'
import { ScheduleQuery } from 'App/Helpers/Schedule/ScheduleQuery'
import Group from 'App/Models/Group/Group'
import ScheduleException from 'App/Exceptions/ScheduleException'

export class ScheduleResponse extends ScheduleQuery {
  /**
   *
   * @param options
   */
  public static async getSchedule(options: ScheduleOptions) {
    try {
      const group = await Group.findByOrFail('abbreviation', options.group)
      options.groupId = group.id
      if (this.isBaccalaureate(group)) {
        const query = await this.queryScheduleBaccalaureate(options)
        return ScheduleSerialize.getSerializeSchedule(query)
      }
      const query = await this.queryScheduleOtherTrainingType(options)
      return query
    } catch (e) {
      throw new ScheduleException('Не удалось найти группу', 500)
    }
  }

  /**
   * define training type is Baccalaureate
   * @param group
   */
  private static isBaccalaureate(group: Group): boolean {
    if (
      group.trainingTypeId === TrainingTypes.BaccalaureateId &&
      group.trainingFormId === TrainingForms.FullTimeFormId
    ) {
      return true
    }
    return false
  }
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
      fullTime: ScheduleSerialize.groupByGroupsCourse(groups, TrainingForms.FullTimeFormId),
      partTime: ScheduleSerialize.groupByGroupsCourse(groups, TrainingForms.PartTimeFormId),
      fullAndPartTime: ScheduleSerialize.groupByGroupsCourse(
        groups,
        TrainingForms.FullAndPartTimeFormId
      ),
    })
    return result
  }
}
