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
            inline
            class="d-flex flex-column justify-space-between"
          >
            <v-radio
              v-for="round in rounds"
              :key="round.id"
              :value="round.name"
              :label="String(round.id)"
              class="width"
            >
            </v-radio>
          </v-radio-group>
        </Selected>
        <Selected title="Раунды">
          <Tabs />
        </Selected>
      </div>
      <div class="d-flex ga-5">
        <v-btn
          class="tune__button"
          target="_blank"
          :to="`${path}/${activeRound}`"
          append-icon="mdi-check-circle"
          variant="outlined"
        >
          Запустить игру
        </v-btn>
        <v-btn
          class="tune__button"
          variant="outlined"
          @click="changeRound"
        >
          Смена раунда
        </v-btn>
        <v-btn
          class="tune__button"
          variant="outlined"
          @click="resetGame"
        >
          Начать заново
        </v-btn>
      </div>
    </v-container>
  </DefaultLayout>
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Tabs from '@/components/Admin/Tabs'
import Teams from '@/components/Admin/Teams'
import { category, melody, team } from '@/services/api.service'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'

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
const store = useAppStore()
const router = useRouter()
const { teams } = storeToRefs(store)
const path = computed(() => router.currentRoute.value.fullPath)

const activeRound = ref('round-one')

const changeRound = () => {
  localStorage.setItem(`changeRound`, JSON.stringify(activeRound.value))
}

const resetGame = async () => {
  teams.value.forEach((el) => {
    team.edit({
      id: el.id,
      name: 'Команда ' + el.id,
      score: 0,
    })
  })

  await melody.reset()
  await category.reset()
  localStorage.clear()
  await store.getTeams()
  await store.getRoundOne()
  await store.getRoundTwo()
  await store.getRoundThree()
  await store.getRoundFour()
}

store.getTeams()
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
