const fs = require('fs')
const path = require('path')

export default class FakeData {
  /**
   * Get data in fake json file
   * @param name
   */
  public static get(name: string): Array<object> {
    const file = path.join(__dirname, '../Fake/fake_data.json')
    const fake = JSON.parse(fs.readFileSync(file, 'utf-8'))
    return fake[name]
  }
}
