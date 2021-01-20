export interface ScheduleOptions {
  readonly group: string
  readonly weekTypeId: number | boolean
  readonly intervalDate: string
  groupId: number
}

export interface GroupsList {
  id: number
  course: number
  departmentId: number
  trainingFormId: number
  trainingTypeId: number
  abbreviation: string
}
export interface CourseWithGroups {
  course: number
  groups: Array<GroupsList>
}
export interface FacultyGroupsList {
  id: number
  abbreviation: string
  name: string
  fullTime: Array<CourseWithGroups>
  partTime: Array<CourseWithGroups>
  fullAndPartTime: Array<CourseWithGroups>
}

export enum TrainingForms {
  /**
   * Очная форма обучения
   */
  FullTimeFormId = 1,
  /**
   * Заочная форма обучения
   */
  PartTimeFormId = 2,
  /**
   * Очно-заочная форма обучения
   */
  FullAndPartTimeFormId = 3,
}

export enum TrainingTypes {
  /**
   * Бакалавриат
   */
  BaccalaureateId = 1,
  /**
   * Магистаратура
   */
  MagistracyId = 2,
  /**
   * Аспирантура
   */
  GraduateSchoolId = 3,
}
