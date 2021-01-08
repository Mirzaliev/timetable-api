import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Faculty from 'App/Models/Group/Faculty'
import Department from 'App/Models/Group/Department'
import TrainingType from 'App/Models/Group/TrainingType'

export default class FacultiesAndChairSeeder extends BaseSeeder {
  public async run() {
    await Faculty.updateOrCreateMany('abbreviation', this.facultiesList())
    await Department.updateOrCreateMany('abbreviation', this.chairsList())
    await TrainingType.updateOrCreateMany('name', this.trainingTypesList())
    this.groupsList()
  }

  private facultiesList(): Array<object> {
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
  private chairsList(): Array<object> {
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
  private trainingTypesList(): Array<object> {
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
  private groupsList(): Array<object> {
    return [
      {
        faculty_id: 1,
        chairId: 2,
        trainingTypeId: 1,
        course: 1,
        abbreviation: '112-СЕР',
      },
      {
        faculty_id: 1,
        chairId: 1,
        trainingTypeId: 1,
        course: 1,
        abbreviation: '111-СЕР',
      },
      {
        faculty_id: 1,
        chairId: 2,
        trainingTypeId: 1,
        course: 1,
        abbreviation: '111-МЕН',
      },
      {
        faculty_id: 1,
        chairId: 2,
        trainingTypeId: 1,
        course: 1,
        abbreviation: '113-СЕР',
      },
      {
        faculty_id: 1,
        chairId: 2,
        trainingTypeId: 1,
        course: 1,
        abbreviation: '113-СЕР',
      },
      {
        faculty_id: 1,
        chairId: 1,
        trainingTypeId: 1,
        course: 1,
        abbreviation: '111-СЕР',
      },
    ]
  }
}
