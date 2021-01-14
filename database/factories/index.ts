import Factory from '@ioc:Adonis/Lucid/Factory'
import Schedule from 'App/Models/Schedule'

export const ScheduleFactory = Factory.define(Schedule, ({ faker }) => {
  return { id: faker.random.number() }
}).build()
