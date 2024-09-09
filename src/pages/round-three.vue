<template>
  <GameLayout>
    <Preview :expand="expand" round='3' />
    <RoundThree :expand="expand" />
  </GameLayout>
</template>
<script setup>
import GameLayout from '@/layouts/GameLayout.vue'
import Preview from '@/components/game/Preview.vue'
import RoundThree from '@/components/game/RoundThree.vue'

const expand = ref(true)

setTimeout(() => {
  expand.value = false
}, 2000)
</script>
