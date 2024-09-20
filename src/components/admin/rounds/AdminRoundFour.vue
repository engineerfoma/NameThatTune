<template>
  <SongList
    class="w-100"
    :songs="rows"
    secondRound
    @updateRound="handleUpdateActiveSong"
  />
</template>
<script setup>
import SongList from '../SongList.vue'
import { onMounted } from 'vue'
import { useAppStore } from '@/stores/app'

const rows = ref(null)

const store = useAppStore()

const getMelodies = async () => {
  try {
    const data = await store.getRoundFour()
    rows.value = data[0].melodies
  } catch (e) {
    alert(`ошибка: ${e}`)
  }
}

const handleUpdateActiveSong = async () => {
  await getMelodies()
}

onMounted(async () => {
  await getMelodies()
})
</script>

<style lang="scss">
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
