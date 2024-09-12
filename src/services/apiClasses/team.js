import axios from 'axios'

export class Team {
  constructor(path) {
    this.path = path
  }

  // Получить все команды
  get() {
    return axios.get(`${this.path}/team/`)
  }

  // удалить все команды
  removeAll() {
    return axios.delete(`${this.path}/team/`)
  }

  // удалить команду
  remove(id) {
    return axios.delete(`${this.path}/team/${id}/`)
  }

  // добавить команду
  add({ id, name, color, score }) {
    return axios.post(`${this.path}/team/`, {
      id,
      name,
      color,
      score
    })
  }

  // изменить команду
  edit({ id, name, color }) {
    return axios.patch(`${this.path}/team/${id}/`, {
      name,
      color,
    })
  }
}
