<template>
  <header class="header d-flex" :class="{header__three: three}">
    <img
      width="211"
      cover
      src="@/assets/icons/logo.svg"
    />
    <div class="header__container w-100 d-flex ">
      <div v-for="team in teams" :key="team.id">
        <TotalBlock v-if="team" :data="team" />
      </div>
    </div>
  </header>
</template>

<script setup>
import TotalBlock from './TotalBlock.vue'
import { useAppStore } from '@/stores/app';

defineProps({
  three: Boolean
})

const teams = ref(null)

const store = useAppStore()

window.addEventListener('storage', (event) => {
  if (event.key === 'sharedTeams') {
    store.teams =  JSON.parse(event.newValue) // Обновляем состояние
    teams.value = store.teams
  }
})

store.teams = JSON.parse(localStorage.getItem('sharedTeams') || '')
teams.value = store.teams

</script>

<style lang="scss" scoped>
.header {
  margin: 45px 100px 44px 57px;
  height: 116px;
  gap: 140px;
  &__container {
    gap: 47px;
    overflow: scroll;
  }

  &__three {
    margin-bottom: 35px;
  }
}
</style>
