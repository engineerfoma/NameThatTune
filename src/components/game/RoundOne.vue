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
import Header from '@/components/game/Header.vue'
import Row from './Row.vue'
defineProps({
  expand: {
    type: Boolean,
    default: true,
  },
})

const rows = ref([
  {
    title: 'ХИТЫ 90-х',
    songs: ['10', '15', '20', '30'],
  },
  {
    title: 'ИМЕНА',
    songs: ['10', '15', '20', '30'],
  },
  {
    title: 'филипп лучезарный',
    songs: ['10', '15', '20', '30'],
  },
  {
    title: 'я на солнышке лежу...',
    songs: ['10', '15', '20', '30'],
    current: true,
    active: '20',
  },
])
</script>
<style lang="scss" scoped>
.body {
  margin-bottom: 18px;
  &:last-child {
    margin-bottom: 60px;
  }
}
</style>
