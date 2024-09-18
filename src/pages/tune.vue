<template>
  <DefaultLayout>
    <v-container
      class="tune d-flex flex-column align-center w-100 justify-space-between"
      color
    >
      <div class="tune d-flex flex-column align-center w-100">
        <Selected
          title="Команды"
          class="color"
        >
          <Teams />
        </Selected>
        <Selected title="Активный раунд">
          <v-radio-group
            v-model="activeRound"
            class="d-flex flex-column justify-space-between"
          >
            <v-radio
              v-for="round in rounds"
              :key="round.id"
              :value="round.name"
              class="width"
            >
              {{ round.id }}
            </v-radio>
          </v-radio-group>
        </Selected>
        <Selected title="Раунды">
          <Tabs />
        </Selected>
      </div>
      <v-btn
        class="tune__button"
        target="_blank"
        :to="`/${activeRound}`"
        append-icon="mdi-check-circle"
        variant="outlined"
        >Запустить игру
      </v-btn>
    </v-container>
  </DefaultLayout>
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Tabs from '../components/admin/Tabs'
import Teams from '../components/admin/Teams'

const rounds = ref([
  {
    id: 1,
    name: 'round-one',
  },
  {
    id: 2,
    name: 'round-two',
  },
  {
    id: 3,
    name: 'round-three',
  },
  {
    id: 4,
    name: 'final-round',
  },
])
const activeRound = ref('round-one')
</script>

<style lang="scss" scoped>
.tune {
  position: relative;
  gap: 20px;
  padding-bottom: 30px;
  max-width: 100%;

  &__button {
    margin: 0 auto;
  }
}
.color {
  :deep(.v-expansion-panel) {
    background-color: rgba(33, 33, 33, 0.5);
  }
}
</style>
