<template>
  <v-fade-transition>
    <div v-show="!expand">
      <Header />
      <div
        class="body"
        v-for="(row, index) in rows"
        :key="index"
      >
        <Row :data="row" />
      </div>
    </div>
  </v-fade-transition>
</template>

<script setup>
import Header from '@/components/Game/Header.vue'
import Row from '../Row/FirstRound/FirstRoundRow.vue'
import { useAppStore } from '@/stores/app'

defineProps({
  expand: {
    type: Boolean,
    default: true,
  },
})

const rows = ref({})

const store = useAppStore()

window.addEventListener('storage', (event) => {
  if (event.key === 'sharedRound1') {
    store.roundOne = JSON.parse(event.newValue) // Обновляем состояние
    rows.value = store.roundOne
  }
})

store.roundOne = JSON.parse(localStorage.getItem('sharedRound1') || '')
rows.value = store.roundOne
</script>
<style lang="scss" scoped>
.body {
  margin-bottom: 18px;
  &:last-child {
    margin-bottom: 60px;
  }
}
</style>
