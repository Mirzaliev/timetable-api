import Faculty from 'App/Models/Group/Faculty'
import {
  FacultyGroupsList,
  GroupsList,
  TrainingForms,
  CourseWithGroups,
} from 'Contracts/ResponseJsonTypesInterface'
import Group from 'App/Models/Group/Group'

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
      fullTime: this.getWithCoursesByGroups(groups, TrainingForms.FullTimeTypeId),
      partTime: this.getWithCoursesByGroups(groups, TrainingForms.PartTimeTypeId),
      fullAndPartTime: this.getWithCoursesByGroups(groups, TrainingForms.FullAndPartTimeTypeId),
    })
    return result
  }

  /**
   *
   * @param groups
   * @param trainingFormId
   */
  private static getWithCoursesByGroups(
    groups: Array<GroupsList>,
    trainingFormId: number
  ): Array<CourseWithGroups> {
    return lodash(groups)
      .filter((x) => x.trainingFormId === trainingFormId)
      .groupBy('course')
      .toPairs()
      .map((currentData) => {
        return lodash.zipObject(['course', 'groups'], currentData)
      })
      .value()
  }

  /**
   *
   * @param group
   */
  public static getSerializeSchedule(group: Group) {
    const formating = {
      id: group.id,
      course: group.course,
      abbreviation: group.abbreviation,
      trainingTypeId: group.trainingType.id,
      trainingType: group.trainingType.name,
      trainingFormId: group.trainingForm.id,
      trainingForm: group.trainingForm.name,
      weekType: group.schedule[0].weekType.name,
      timetable: lodash(group.schedule)
        .map((item) => {
          return {
            id: item.id,
            lesson: item.lesson.name,
            lessonNumber: item.lessonNumber.number,
            lessonTime: item.lessonNumber.startAndEndTime,
            lessonType: item.lessonType.name,
            dayId: item.day.id,
            day: item.day.name,
            classroom: item.classroom.abbreviation,
            teacher: item.teacher.degree.abbreviation + ' ' + item.teacher.fullName,
          }
        })
        .sortBy('dayId')
        .groupBy('day')
        .toPairs()
        .map((currentData) => {
          const day = lodash.zipObject(['day', 'schedule'], currentData)
          return {
            day: day.day,
            schedule: lodash(day.schedule)
              .groupBy('lessonNumber')
              .toArray()
              .map((schedule) => {
                return {
                  id: schedule[0].id,
                  lessonNumber: schedule[0].lessonNumber
                }
              }),
          }
        })
        .value(),
    }

    return formating
  }
}
