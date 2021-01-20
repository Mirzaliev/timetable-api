import Group from 'App/Models/Group/Group'

const lodash = require('lodash')
import { GroupsList, CourseWithGroups } from 'App/Helpers/Schedule/ScheduleInterfaces'

export class ScheduleSerialize {
  /**
   * This method sorts the groups by course
   * @param groups
   * @param trainingFormId
   */
  public static groupByGroupsCourse(
    groups: Array<GroupsList>,
    trainingFormId: number
  ): Array<CourseWithGroups> {
    return this.getWithCoursesByGroups(groups, trainingFormId)
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
      timetable: this.getSerializeTimetable(group.schedule),
    }
  }
  /**
   * This method serializes the group schedule to the
   * desired format for sending a ready json response
   * @param groupSchedule
   */
  protected static getSerializeTimetable(groupSchedule: Array<object | string[]>) {
    return this.addMissingDayInObject(
      lodash(groupSchedule)
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
        .map((item) => {
          const day = lodash.zipObject(['day', 'schedule'], item)
          return {
            dayId: day.schedule[0].dayId,
            day: day.day,
            schedule: lodash(day.schedule)
              .groupBy('lessonNumber')
              .toArray()
              .map((schedule) => {
                return {
                  lessonNumber: schedule[0].lessonNumber,
                  lessonTime: schedule[0].lessonTime,
                  lessons: lodash.map(schedule, (lesson) => {
                    return {
                      lessonType: lesson.lessonType,
                      classroom: lesson.classroom,
                      teacher: lesson.teacher,
                    }
                  }),
                }
              })
              .value(),
          }
        })
        .map((day) => {
          return this.addMissingLessonInObject(day)
        })
        .value()
    )
  }

  /**
   * Returns grouped groups by course
   * @param groups
   * @param trainingFormId
   */
  protected static getWithCoursesByGroups(groups: Array<GroupsList>, trainingFormId: number) {
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
   * The method adds the missing day. For example: if there are no
   * lessons on the 3rd day of the week, but an empty object is
   * needed to display the table correctly on the site
   * @param schedule
   */
  protected static addMissingDayInObject(schedule: Array<object>) {
    const normalOrder = [1, 2, 3, 4, 5, 6]
    const { existingOrder } = this.defineExistingNormalOrder(schedule, 'id')
    for (let i = 0; i < normalOrder.length; i++) {
      if (existingOrder.indexOf(normalOrder[i]) < 0) {
        const daysList: object = {
          1: 'Понедельник',
          2: 'Вторник',
          3: 'Среда',
          4: 'Четверт',
          5: 'Пятница',
          6: 'Суббота',
        }
        const missingObject = {
          id: i + 1,
          day: daysList[i + 1],
          schedule: [],
        }
        schedule.push(missingObject)
      }
    }
    return lodash.sortBy(schedule, 'id')
  }

  /**
   * This method adds the missed lesson, that is, if there is 1 lesson,
   * the next lesson is 3, then the method adds an empty lesson 2 to
   * display the normal order of lessons to the user
   * @param day
   */
  protected static addMissingLessonInObject(day: any) {
    const { normalOrder, existingOrder } = this.defineExistingNormalOrder(
      day.schedule,
      'lessonNumber'
    )
    for (let i = 0; i < normalOrder.length; i++) {
      if (existingOrder.indexOf(normalOrder[i]) < 0) {
        const missingObject = {
          lessonNumber: i + 1,
          lessons: [],
        }
        day.schedule.push(missingObject)
      }
    }
    return {
      id: day.dayId,
      day: day.day,
      schedule: lodash.sortBy(day.schedule, 'lessonNumber'),
    }
  }

  /**
   * This method determines the existing order and what the order of the
   * lessons should be
   * @param currentObject
   * @param key
   */
  protected static defineExistingNormalOrder(currentObject: object, key: string) {
    const existingOrder: number[] = []
    let iter = 0
    const ObjectWithMaxLsNum = lodash.maxBy(currentObject, (item) => {
      existingOrder[iter] = item[key]
      iter += 1
      return item[key]
    })
    const normalOrder: number[] = []
    for (let i = 0; i < ObjectWithMaxLsNum[key]; i++) {
      normalOrder[i] = i + 1
    }
    return { existingOrder, normalOrder }
  }
}
