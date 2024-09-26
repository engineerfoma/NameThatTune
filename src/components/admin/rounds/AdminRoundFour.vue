<template>
  <SongList
    class="w-100"
    v-if="roundFour[0]?.melodies"
    :currentCategory="roundFour[0]"
    activeRound="4"
    secondRound
    @updateRound="handleUpdateActiveSong"
  />
</template>
<script setup>
import SongList from '../SongList.vue'
import { onMounted } from 'vue'
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'

const store = useAppStore()

const { roundFour } = storeToRefs(store)
const getMelodies = async () => {
  try {
    await store.getRoundFour()
  } catch (e) {
    alert(`ошибка: ${e}`)
  }
}

const handleUpdateActiveSong = async () => {
  await getMelodies()
}

onMounted(async () => {
  await handleUpdateActiveSong()
})
</script>

<style lang="scss">
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
