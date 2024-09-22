<template>
  <v-card class="w-100">
    <v-tabs
      v-model="tab"
      bg-color="primary"
    >
      <v-tab value="one">Раунд 1</v-tab>
      <v-tab value="two">Раунд 2</v-tab>
      <v-tab value="three">Раунд 3</v-tab>
      <v-tab value="four">Раунд 4</v-tab>
    </v-tabs>
    <v-card-text>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="one"> <RoundOne /> </v-tabs-window-item>
        <v-tabs-window-item value="two"><RoundTwo /> </v-tabs-window-item>
        <v-tabs-window-item value="three"><RoundThree /> </v-tabs-window-item>
        <v-tabs-window-item value="four"> <RoundFour /> </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </v-card>
</template>
<script setup>
import RoundOne from './Rounds/AdminRoundOne.vue'
import RoundTwo from './Rounds/AdminRoundTwo.vue'
import RoundThree from './Rounds/AdminRoundThree.vue'
import RoundFour from './Rounds/AdminRoundFour.vue'
const tab = ref(null)
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'
const store = useAppStore()
const { activeCategory } = storeToRefs(store)
</script>
<style lang="scss"></style>
