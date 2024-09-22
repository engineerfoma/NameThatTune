<template>
  <GameLayout>
    <Preview
      :expand="expand"
      round="final"
    />
    <FinalRound :expand="expand" />
  </GameLayout>
</template>
<script setup>
import GameLayout from '@/layouts/GameLayout.vue'
import Preview from '@/components/Game/Preview.vue'
import FinalRound from '@/components/Game/Melody/Rounds/MelodyFinalRound.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const expand = ref(true)

window.addEventListener('storage', (event) => {
  if (event.key === 'changeRound') {
    router.push('/guess-melody/' + JSON.parse(event.newValue))
  }
})

setTimeout(() => {
  expand.value = false
}, 2000)
</script>
