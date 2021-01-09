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
  o: Array<GroupsList>
  zo: Array<GroupsList>
  ozo: Array<GroupsList>
}
