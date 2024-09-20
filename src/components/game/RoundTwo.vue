<template>
  <v-fade-transition>
    <div v-show="!expand">
      <Header />
      <div
        class="body"
        v-for="(row, index) in rows"
        :key="index"
      >
        <Row
          :data="row"
          :points="points[row.id]"
        />
      </div>
    </div>
  </v-fade-transition>
</template>

<script setup>
import Header from '@/components/game/Header.vue'
import Row from './Row/twoRound/Row.vue'
import { useAppStore } from '@/stores/app'

defineProps({
  expand: {
    type: Boolean,
    default: true,
  },
})

const rows = ref({})

const store = useAppStore()

const points = ref({
  5: 70,
  6: 70,
  7: 70,
  8: 70,
})

const timer = ref(false)
const activeCategory = ref(null)

let interval = null

watch(timer, () => {
  if (timer.value) {
    // points.value[activeCategory] += 5
    interval = setInterval(() => {
      points.value[Number(activeCategory.value)] += 1
    }, 200)
  } else {
    clearInterval(interval) // Останавливаем счётчик
    interval = null
  }
})

onUnmounted(() => {
  clearInterval(interval)
})

window.addEventListener('storage', (event) => {
  if (event.key === 'sharedRound2') {
    store.roundTwo = JSON.parse(event.newValue) // Обновляем состояние
    rows.value = store.roundTwo
  }
  if (event.key === 'play') {
    timer.value = JSON.parse(event.newValue) // Обновляем состояние
  }
  if (event.key === 'activeCategory') {
    activeCategory.value = event.newValue // Обновляем состояние
  }
})

store.roundTwo = JSON.parse(localStorage.getItem('sharedRound2') || '')
rows.value = store.roundTwo
</script>
<style lang="scss" scoped>
.body {
  margin-bottom: 18px;
  &:last-child {
    margin-bottom: 60px;
  }
}
</style>
