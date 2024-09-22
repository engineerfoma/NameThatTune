// Utilities
import { defineStore } from 'pinia'
import { round, team } from '@/services/api.service'

export const useAppStore = defineStore('app', {
  state: () => ({
    roundOne: [],
    roundTwo: [],
    roundThree: [],
    roundFour: [],
    teams: [],
    activeCategory: {
      one: null,
      two: null,
      three: null,
    },
  }),
  actions: {
    async getRoundOne() {
      const { data } = await round.getById(1)

      localStorage.setItem(`sharedRound1`, JSON.stringify(data)) // Сохраняем в Local Storage
      this.roundOne = data
      return this.roundOne
    },
    async getRoundTwo() {
      const { data } = await round.getById(2)

      localStorage.setItem(`sharedRound2`, JSON.stringify(data)) // Сохраняем в Local Storage
      this.roundTwo = data
      return this.roundTwo
    },
    async getRoundThree() {
      const { data } = await round.getById(3)

      localStorage.setItem(`sharedRound3`, JSON.stringify(data)) // Сохраняем в Local Storage
      this.roundThree = data
      return this.roundThree
    },

    async getRoundFour() {
      const { data } = await round.getById(4)

      localStorage.setItem(`sharedRound4`, JSON.stringify(data[0].melodies)) // Сохраняем в Local Storage
      this.roundFour = data
      return this.roundFour
    },
    async getTeams() {
      const { data } = await team.get()

      localStorage.setItem('sharedTeams', JSON.stringify(data)) // Сохраняем в Local Storage
      if (data.length) {
        this.teams = []

        data.forEach((team) => {
          team.disabled = true
          team.new = false
          return this.teams.push(team)
        })
      }
      return this.teams
    },

    async getActiveCategory(payload) {
      const { stringRoundId, roundId } = payload
      const { data } = await round.getById(roundId)
      const findActiveCategory = data.find((category) => category.status === 'active')
      this.activeCategory[stringRoundId] = Number(findActiveCategory?.id)
      console.log(this.activeCategory);
      
    },

    changeActiveCategory(payload) {
      const { id, value } = payload
      this.activeCategory[id] = Number(value)
      return this.activeCategory
    },

    clearActiveCategory(id) {
      return (this.activeCategory[id] = '')
    },
  },
})
