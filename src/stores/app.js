// Utilities
import { defineStore } from 'pinia'
import { round, team } from '@/services/api.service';

export const useAppStore = defineStore('app', {
  state: () => ({
    round: [],
    teams: []
  }),
  actions: {
    async getRound(id) {
      const { data } = await round.getById(id)
      
      localStorage.setItem(`sharedRound${id}`, JSON.stringify(data)) // Сохраняем в Local Storage
      this.round = data
      return this.round
    },
    async getTeams() {
      const { data } = await team.get()
      
      localStorage.setItem('sharedTeams', JSON.stringify(data)) // Сохраняем в Local Storage
      this.teams = data
      return this.teams
    },
  },
})
