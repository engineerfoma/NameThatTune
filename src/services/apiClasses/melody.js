import axios from 'axios'

export class Melody {
  constructor(path) {
    this.path = path
  }

  // Получить мелодии
  get() {
    return axios.get(`${this.path}/melody/`)
  }

  // удалить все мелодии
  removeAll() {
    return axios.delete(`${this.path}/melody/`)
  }

  // удалить мелодию
  remove(id) {
    return axios.delete(`${this.path}/melody/${id}/`)
  }

  // добавить мелодию
  add(data) {
    return axios.post(`${this.path}/melody/`, {
      name: data.name,
      id: data.id,
      points: data.points,
      melodyPath: data.melodyPath,
      songPath: data.songPath,
    })
  }

  // изменить мелодию
  edit(data) {
    return axios.patch(`${this.path}/melody/${data.id}/`, {
      name: data.name,
      id: data.id,
      points: data.points,
      melodyPath: data.melodyPath,
      songPath: data.songPath,
    })
  }
}
