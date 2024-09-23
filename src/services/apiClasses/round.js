import axios from 'axios'

export class Round {
  constructor(path) {
    this.path = path
  }

  // Получить список категорий в раунде
  getById(id) {
    return axios.get(`${this.path}/round/${id}/`)
  }
}