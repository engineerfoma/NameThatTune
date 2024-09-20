<template>
  <GameLayout>
    <Preview :expand="expand" round='3' />
    <RoundThree :expand="expand" />
  </GameLayout>
</template>
<script setup>
import GameLayout from '@/layouts/GameLayout.vue'
import Preview from '@/components/Game/Preview.vue'
import RoundThree from '@/components/Game/Melody/Rounds/MelodyRoundThree.vue'

const expand = ref(true)

setTimeout(() => {
  expand.value = false
}, 2000)
</script>
