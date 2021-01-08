import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Faculty from 'App/Models/Group/Faculty'
import Department from 'App/Models/Group/Department'
import TrainingType from 'App/Models/Group/TrainingType'
import TrainingForm from 'App/Models/Group/TrainingForm'
import Group from '../../app/Models/Group/Group'

export default class GroupsAndOtherTableSeeder extends BaseSeeder {
  public async run() {
    await Faculty.updateOrCreateMany('abbreviation', GroupsAndOtherTableSeeder.facultiesList())
    await Department.updateOrCreateMany('abbreviation', GroupsAndOtherTableSeeder.departmentList())
    await TrainingType.updateOrCreateMany('name', GroupsAndOtherTableSeeder.trainingTypesList())
    await TrainingForm.updateOrCreateMany('name', GroupsAndOtherTableSeeder.trainingFormsList())
    await Group.updateOrCreateMany('abbreviation', GroupsAndOtherTableSeeder.groupsList())
  }

  private static facultiesList(): Array<object> {
    return [
      {
        abbreviation: 'МиП',
        name: 'Факультет Менеджмента и предпринимательства',
      },
      {
        abbreviation: 'ТД',
        name: 'Факультет Торгового дела',
      },
      {
        abbreviation: 'КТиИБ',
        name: 'Факультет Компьютерных технологий и информационной безопасности',
      },
      {
        abbreviation: 'УЭФ',
        name: 'Учетно-экономический факультет',
      },
      {
        abbreviation: 'ЭиФ',
        name: 'Факультет Экономики и финансов',
      },
      {
        abbreviation: 'ЮрФак',
        name: 'Юридический факультет',
      },
      {
        abbreviation: 'ЛиЖ',
        name: 'Факультет Лингвистики и журналистики',
      },
      {
        abbreviation: 'ИМ',
        name: 'Институт Магистратуры',
      },
      {
        abbreviation: 'ИА',
        name: 'Институт Аспирантуры',
      },
    ]
  }
  private static departmentList(): Array<object> {
    return [
      {
        facultyId: 1,
        abbreviation: 'ФМ',
        name: 'Финансовый менеджмент',
      },
      {
        facultyId: 1,
        abbreviation: 'ОиСМ',
        name: 'Общий и стратегический менеджмент',
      },
      {
        facultyId: 2,
        abbreviation: 'ФиК',
        name: 'Философии и культурологии',
      },
      {
        facultyId: 2,
        abbreviation: 'МТиТД',
        name: 'Международной торговли и таможенного дела',
      },
      {
        facultyId: 3,
        abbreviation: 'ИСиПИ',
        name: 'Информационных систем и прикладной информатики',
      },
      {
        facultyId: 3,
        abbreviation: 'ИСиЗИ',
        name: 'Информационных технологий и защиты информации',
      },
      {
        facultyId: 4,
        abbreviation: 'СЭиОР',
        name: 'Статистики, эконометрики и оценки рисков',
      },
      {
        facultyId: 4,
        abbreviation: 'БУ',
        name: 'Бухгалтерского учета',
      },
    ]
  }
  private static trainingTypesList(): Array<object> {
    return [
      {
        name: 'Бакалавриат',
      },
      {
        name: 'Магистратура',
      },
      {
        name: 'Аспирантура',
      },
    ]
  }
  private static trainingFormsList(): Array<object> {
    return [
      {
        name: 'ОЧНАЯ',
      },
      {
        name: 'ЗАОЧНАЯ',
      },
      {
        name: 'ОЧНО-ЗАОЧНАЯ',
      },
    ]
  }
  private static groupsList(): Array<object> {
    return [
      {
        department_id: 2,
        course: 1,
        trainingTypeId: 1,
        trainingFormId: 1,
        abbreviation: '110-СЕР',
      },
      {
        department_id: 1,
        trainingTypeId: 1,
        course: 4,
        trainingFormId: 1,
        abbreviation: '141-МЕН',
      },
      {
        department_id: 2,
        trainingTypeId: 1,
        course: 1,
        trainingFormId: 1,
        abbreviation: '112-СЕР',
      },
      {
        department_id: 2,
        trainingTypeId: 1,
        course: 5,
        trainingFormId: 2,
        abbreviation: '153-МЕНZ',
      },
      {
        department_id: 1,
        trainingTypeId: 1,
        course: 2,
        trainingFormId: 1,
        abbreviation: '124-МЕН',
      },
      {
        department_id: 2,
        trainingTypeId: 1,
        course: 5,
        trainingFormId: 2,
        abbreviation: '155-МЕНZ',
      },
      {
        department_id: 4,
        trainingTypeId: 1,
        course: 4,
        trainingFormId: 1,
        abbreviation: '140-ТД',
      },
      {
        department_id: 4,
        trainingTypeId: 1,
        course: 1,
        trainingFormId: 1,
        abbreviation: '111-ТД',
      },
      {
        department_id: 4,
        trainingTypeId: 1,
        course: 5,
        trainingFormId: 2,
        abbreviation: '152-ТОРZ',
      },
      {
        department_id: 3,
        trainingTypeId: 1,
        course: 1,
        trainingFormId: 1,
        abbreviation: '113-ТД',
      },
      {
        department_id: 4,
        trainingTypeId: 1,
        course: 1,
        trainingFormId: 1,
        abbreviation: '114-ТД',
      },
      {
        department_id: 4,
        trainingTypeId: 1,
        course: 5,
        trainingFormId: 2,
        abbreviation: '155-ТОРZ',
      },
      {
        department_id: 6,
        trainingTypeId: 1,
        course: 1,
        trainingFormId: 1,
        abbreviation: '110-ИСТ',
      },
      {
        department_id: 5,
        trainingTypeId: 1,
        course: 1,
        trainingFormId: 1,
        abbreviation: '111-ИСТ',
      },
      {
        department_id: 6,
        trainingTypeId: 1,
        course: 3,
        trainingFormId: 1,
        abbreviation: '132-ИСТ',
      },
      {
        department_id: 5,
        trainingTypeId: 1,
        course: 4,
        trainingFormId: 1,
        abbreviation: '143-ИСТ',
      },
      {
        department_id: 5,
        trainingTypeId: 1,
        course: 2,
        trainingFormId: 1,
        abbreviation: '124-ИСТ',
      },
      {
        department_id: 6,
        trainingTypeId: 1,
        course: 3,
        trainingFormId: 1,
        abbreviation: '135-ИСТ',
      },
      {
        department_id: 6,
        trainingTypeId: 1,
        course: 4,
        trainingFormId: 1,
        abbreviation: '140-ЭК',
      },
      {
        department_id: 5,
        trainingTypeId: 1,
        course: 1,
        trainingFormId: 1,
        abbreviation: '111-ЭК',
      },
      {
        department_id: 5,
        trainingTypeId: 1,
        course: 2,
        trainingFormId: 1,
        abbreviation: '122-ЭК',
      },
      {
        department_id: 5,
        trainingTypeId: 1,
        course: 1,
        trainingFormId: 1,
        abbreviation: '113-ЭК',
      },
      {
        department_id: 6,
        trainingTypeId: 1,
        course: 5,
        trainingFormId: 2,
        abbreviation: '154-МОZ',
      },
      {
        department_id: 6,
        trainingTypeId: 1,
        course: 3,
        trainingFormId: 1,
        abbreviation: '135-ЭК',
      },
      {
        department_id: 1,
        trainingTypeId: 2,
        course: 1,
        trainingFormId: 1,
        abbreviation: '810-МЕН',
      },
      {
        department_id: 1,
        trainingTypeId: 2,
        course: 1,
        trainingFormId: 1,
        abbreviation: '811-МЕН',
      },
      {
        department_id: 2,
        trainingTypeId: 2,
        course: 4,
        trainingFormId: 1,
        abbreviation: '842-ЭК',
      },
      {
        department_id: 1,
        trainingTypeId: 2,
        course: 1,
        trainingFormId: 1,
        abbreviation: '813-МЕН',
      },
      {
        department_id: 1,
        trainingTypeId: 2,
        course: 4,
        trainingFormId: 1,
        abbreviation: '844-МЕН',
      },
      {
        department_id: 2,
        trainingTypeId: 2,
        course: 3,
        trainingFormId: 1,
        abbreviation: '835-ЭК',
      },
      {
        department_id: 2,
        trainingTypeId: 2,
        course: 3,
        trainingFormId: 1,
        abbreviation: '830-ФК',
      },
      {
        department_id: 1,
        trainingTypeId: 2,
        course: 4,
        trainingFormId: 1,
        abbreviation: '841-ФК',
      },
      {
        department_id: 2,
        trainingTypeId: 2,
        course: 5,
        trainingFormId: 3,
        abbreviation: '152-ФКOZ',
      },
      {
        department_id: 2,
        trainingTypeId: 2,
        course: 1,
        trainingFormId: 1,
        abbreviation: '813-ФК',
      },
      {
        department_id: 1,
        trainingTypeId: 2,
        course: 2,
        trainingFormId: 1,
        abbreviation: '824-ФК',
      },
      {
        department_id: 2,
        trainingTypeId: 2,
        course: 2,
        trainingFormId: 1,
        abbreviation: '825-ФК',
      },
    ]
  }
}
