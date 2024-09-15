import axios from 'axios'

export class Category {
  constructor(path) {
    this.path = path
  }

  // Получить все категории
  get() {
    return axios.get(`${this.path}/category/`)
  }

  // Получить категорию по id
  getById(id) {
    return axios.get(`${this.path}/category/${id}/`)
  }

  // удалить все категории
  removeAll() {
    return axios.delete(`${this.path}/category/`)
  }

  // удалить категорию
  remove(id) {
    return axios.delete(`${this.path}/category/${id}/`)
  }

  // добавить категорию
  add(data) {
    return axios.post(`${this.path}/category/`, data)
  }

  // добавить мелоидю в категорию
  addMelodyInCategory({categoryId, melodyId}, data) {
    return axios.post(`${this.path}/category/${categoryId}/${melodyId}/`, data)
  }

  // изменить категорию
  edit(data) {
    return axios.patch(`${this.path}/category/${id}/`, data)
  }
}
