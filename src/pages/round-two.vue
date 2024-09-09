<template>
  <GameLayout>
    <Preview :expand="expand" round='2' />
    <RoundTwo :expand="expand" />
  </GameLayout>
</template>
<script setup>
import GameLayout from '@/layouts/GameLayout.vue'
import Preview from '@/components/game/Preview.vue'
import RoundTwo from '@/components/game/RoundTwo.vue'

const expand = ref(true)

setTimeout(() => {
  expand.value = false
}, 2000)
</script>
