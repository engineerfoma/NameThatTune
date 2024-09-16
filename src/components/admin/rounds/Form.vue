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
              :disabled="data.disabled"
              variant="outlined"
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
              variant="outlined"
              :disabled="data.disabled"
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
          <v-col
            class="w100"
          >
          <Modal :data="data" @saveScore="$emit('saveScore', $event)"/>
          </v-col>
        </div>
        <div class="d-flex">
          <v-btn
            v-if="data.new"
            class="mr-6"
            @click="$emit('createTeam', data)"
            variant="outlined"
          >
            Создать
          </v-btn>
          <v-btn
            v-if="data.disabled && !data.new"
            class="mr-6"
            @click="$emit('updateStateForm', data)"
            variant="outlined"
          >
            Редактировать
          </v-btn>
          <v-btn
            v-else-if="!data.disabled && !data.new"
            class="mr-6"
            @click="$emit('updateForm', data)"
            variant="outlined"
          >
            Сохранить
          </v-btn>
          <v-btn
            v-if="data.disabled && !data.new"
            @click="$emit('removeForm', data.id)"
            variant="outlined"
          >
            Удалить
          </v-btn>
          <v-btn
            v-else
            @click="$emit('cancelForm', data)"
            variant="outlined"
          >
            Отмена
          </v-btn>
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
