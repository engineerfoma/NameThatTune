<template>
  <GameLayout>
    <Preview :expand="expand" round='final' />
    <FinalRound :expand="expand" />
  </GameLayout>
</template>
<script setup>
import GameLayout from '@/layouts/GameLayout.vue'
import Preview from '@/components/game/Preview.vue'
import FinalRound from '@/components/game/FinalRound.vue'

const expand = ref(true)

setTimeout(() => {
  expand.value = false
}, 2000)
</script>
