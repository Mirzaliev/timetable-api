export interface GroupsList {
  id: number
  course: number
  departmentId: number
  trainingFormId: number
  trainingTypeId: number
  abbreviation: string
}

export interface FacultyGroupsList {
  id: number
  abbreviation: string
  name: string
  fullTime: Array<GroupsList>
  partTime: Array<GroupsList>
  fullAndPartTime: Array<GroupsList>
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
