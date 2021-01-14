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
  FullTimeTypeId = 1,
  /**
   * Заочная форма обучения
   */
  PartTimeTypeId = 2,
  /**
   * Очно-заочная форма обучения
   */
  FullAndPartTimeTypeId = 3,
}
