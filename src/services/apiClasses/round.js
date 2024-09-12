import axios from 'axios'

export class Round {
  constructor(path) {
    this.path = path
  }

  // Получить список категорий в раунде
  get(name) {
    return axios.get(`${this.path}/round/${name}`)
  }

  // Получить список раундов
  getAll() {
    return axios.get(`${this.path}/round/`)
  }

  // // удалить все раунды
  // removeAll() {
  //   return axios.delete(`${this.path}/round/`)
  // }

  // удалить категорию из раунда
  remove(roundId, categoryId) {
    return axios.delete(`${this.path}/round/${roundId}/${categoryId}/`)
  }

  // добавить категорию в раунд
  add(roundId, categoryId) {
    return axios.post(`${this.path}/round/${roundId}/${categoryId}/`)
  }
}
