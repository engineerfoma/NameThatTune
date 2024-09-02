<template>
  <v-form v-model="valid">
    <v-container>
      <v-row class="w-100 d-flex flex-row align-center">
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="data.name"
            :counter="10"
            :rules="nameRules"
            label="Введите название команды"
            hide-details
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-select
            style="height: 56px"
            clearable
            label="Выберите цвет команды"
            v-model="data.color"
            required
            :items="[
              'Красный',
              'Синий',
              'Зеленый',
              'Бирюзовый',
              'Фиолетовый',
              'Оранжевый',
            ]"
          ></v-select>
        </v-col>
        <v-tooltip
          v-if="!data.completed"
          text="Создаить команду"
          location="end"
        >
          <template v-slot:activator="{ props }">
            <v-icon
              :height="30"
              :width="30"
              size="x-large"
              class="v-img flex-0-0"
              v-bind="props"
              @click="data.completed = true"
              icon="mdi-check-circle"
            ></v-icon>
          </template>
        </v-tooltip>
        <v-tooltip
          text="Удалить команду"
          location="end"
        >
          <template v-slot:activator="{ props }">
            <v-img
              :height="30"
              :width="30"
              class="v-img flex-0-0"
              v-bind="props"
              src="@/assets/icons/delete.svg"
              alt="delete"
              @click="$emit('removeForm', index)"
            />
          </template>
        </v-tooltip>
      </v-row>
    </v-container>
  </v-form>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
  index: Number,
})
</script>
<style lang="scss" scoped>
.v-img {
  width: 50px;
  transition: opacity 0.3s ease;
  &__img {
    width: 50px;
  }
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
}
</style>
