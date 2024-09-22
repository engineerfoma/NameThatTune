<template>
  <SongList
    class="w-100"
    v-if="row?.melodies"
    :currentCategory="row"
    activeRound="4"
    secondRound
    @updateRound="handleUpdateActiveSong"
  />
</template>
<script setup>
import SongList from '../SongList.vue'
import { onMounted } from 'vue'
import { useAppStore } from '@/stores/app'

const row = ref(null)

const store = useAppStore()

const getMelodies = async () => {
  try {
    const data = await store.getRoundFour()
    console.log(data)

    row.value = data[0]
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
