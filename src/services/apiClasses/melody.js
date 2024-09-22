import axios from 'axios'

export class Melody {
  constructor(path) {
    this.path = path
  }

  // Получить мелодии
  get() {
    return axios.gemelodyt(`${this.path}/melody/`)
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
      points: data.points,
      melodyPath: data.melodyPath,
      songPath: data.songPath,
      status: data.status,
      completed: data.completed,
    })
  }

  // изменить мелодию в 3 раунде для блокировки всей категории
  editForThirdRound(id) {
    return axios.patch(`${this.path}/melody/round_3/${id}/completed/`)
  }

  // сбросить мелодии
  reset() {
    return axios.patch(`${this.path}/melody/default/`)
  }

  // активировать мелодию
  activateStatus(id) {
    return axios.patch(`${this.path}/melody/${id}/active/`, {
      status: 'active',
    })
  }
}
