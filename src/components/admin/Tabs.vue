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
        {{ activeCategory }}
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
import RoundOne from './rounds/RoundOne.vue'
import RoundTwo from './rounds/RoundTwo.vue'
import RoundThree from './rounds/RoundThree.vue'
import RoundFour from './rounds/RoundFour.vue'
const tab = ref(null)
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia';
const { activeCategory } = storeToRefs(useAppStore)
// const activeCategory = ref(null)
</script>
<style lang="scss">
// .grid-prop {
//   grid-template-columns: 50px 1fr;
// }

// .radio-group {
//   :deep(.v-selection-control-group) {
//     gap: 25px;
//   }
// }
</style>