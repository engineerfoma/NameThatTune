<template>
  <GameLayout>
    <Preview :expand="expand" round='2' />
    <RoundTwo :expand="expand" />
  </GameLayout>
</template>
<script setup>
import GameLayout from '@/layouts/GameLayout.vue'
import Preview from '@/components/Game/Preview.vue'
import RoundTwo from '@/components/Game/Melody/Rounds/MelodyRoundTwo.vue'

const expand = ref(true)

setTimeout(() => {
  expand.value = false
}, 2000)
</script>
