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
        <Selected title="Раунды">
          <Tabs />
        </Selected>
      </div>
      <v-btn
        class="tune__button"
        target="_blank"
        to="/round-one"
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
