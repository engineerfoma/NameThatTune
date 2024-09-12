<template>
  <v-form>
    <v-container>
      <v-row
        class="w-100 d-flex flex-row align-center flex-sm-nowrap justify-space-between"
      >
        <div class="w-100 d-flex flex-row align-center flex-sm-nowrap">
          <v-col
            cols="12"
            md="5"
            class="w100"
          >
            <v-text-field
              v-model="data.name"
              :counter="10"
              label="Введите название команды"
              :disabled="data.created"
              hide-details
              required
            ></v-text-field>
          </v-col>
          <v-col
            class="w100"
            cols="12"
            md="5"
          >
            <v-select
              style="height: 56px"
              clearable
              label="Выберите цвет команды"
              v-model="data.color"
              required
              :disabled="data.created"
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
        </div>
        <div class="d-flex">
          <v-tooltip
            v-if="!data.created"
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
                @click="$emit('createTeam', data)"
                icon="mdi-check-circle"
              ></v-icon>
            </template>
          </v-tooltip>
          <v-btn
            v-else
            class="mr-6"
            @click="$emit('updateRow', data)"
            variant="outlined"
          >
            Редактировать
          </v-btn>
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
                @click="$emit('removeForm', data.id)"
              />
            </template>
          </v-tooltip>
        </div>
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
