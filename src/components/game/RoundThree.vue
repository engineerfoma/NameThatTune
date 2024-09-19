<template>
  <v-fade-transition>
    <div v-show="!expand">
      <Header three />
      <div
        class="body"
        v-for="(row, index) in rows"
        :key="index"
      >
        <!-- <Row :data="row" /> -->
      </div>
    </div>
  </v-fade-transition>
</template>

<script setup>
import Header from '@/components/game/Header.vue'
import Row from './Row/threeRound/Row.vue'
import { useAppStore } from '@/stores/app'
defineProps({
  expand: {
    type: Boolean,
    default: true,
  },
})

const store = useAppStore()
const rows = ref({})
// const rows = ref([
//   {
//     title: 'ПЕСНЯ 1',
//     songs: ['3', '4', '5', '6', '7'],
//   },
//   {
//     title: 'ПЕСНЯ 2',
//     songs: ['3', '4', '5', '6', '7'],
//   },
//   {
//     title: 'ПЕСНЯ 3',
//     songs: ['3', '4', '5', '6', '7'],
//   },
//   {
//     title: 'ПЕСНЯ 4',
//     songs: ['3', '4', '5', '6', '7'],
//   },
//   {
//     title: 'ПЕСНЯ 5',
//     songs: ['3', '4', '5', '6', '7'],
//     current: true,
//     active: '4',
//   },
// ])
window.addEventListener('storage', (event) => {
  if (event.key === 'sharedRound3') {
    store.roundThree = JSON.parse(event.newValue) // Обновляем состояние
    rows.value = store.roundThree
  }
})

store.roundThree = JSON.parse(localStorage.getItem('sharedRound3') || '')
rows.value = store.roundThree
</script>
<style lang="scss" scoped>
.body {
  margin-bottom: 4px;
  &:last-child {
    margin-bottom: 50px;
  }
}
</style>
