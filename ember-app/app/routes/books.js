import Route from '@ember/routing/route'

export default class BooksRoute extends Route {
  async model() {
    let response = await fetch('https://teststand.t-mobis.ru/Books')
    let raw = await response.json()
    let parsed = JSON.parse(raw)
    return parsed
  }
}
