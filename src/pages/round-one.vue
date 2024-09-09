<template>
  <GameLayout>
    <Preview :expand="expand" />
    <RoundOne :expand="expand" />
  </GameLayout>
</template>
<script setup>
import GameLayout from '@/layouts/GameLayout.vue'
import Preview from '@/components/game/Preview.vue'
import RoundOne from '@/components/game/RoundOne.vue'

const expand = ref(true)

setTimeout(() => {
  expand.value = false
}, 2000)
</script>
