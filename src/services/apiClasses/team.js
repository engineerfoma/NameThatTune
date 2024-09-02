import axios from 'axios'

export class Team {
  constructor(path) {
    this.path = path
  }

  // Получить все команды
  get() {
    return axios.get(`${this.path}/team/`)
  }

  // Получить все команды
  removeAll() {
    return axios.delete(`${this.path}/team/`)
  }

  // Получить все команды
  add(data) {
    return axios.post(`${this.path}/team/`, {
      id: data.id,
      name: data.name,
      color: data.color,
    })
  }
}
