<template>
  <GameLayout>
    <Preview :expand="expand" />
    <RoundOne :expand="expand" />
  </GameLayout>
</template>
<script setup>
import GameLayout from '@/layouts/GameLayout.vue'
import Preview from '@/components/Game/Preview.vue'
import RoundOne from '@/components/Game/Melody/Rounds/MelodyRoundOne.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

window.addEventListener('storage', (event) => {
  if (event.key === 'changeRound') {
    router.push('/guess-melody/' + JSON.parse(event.newValue))
  }
})

const expand = ref(true)

setTimeout(() => {
  expand.value = false
}, 2000)
</script>
