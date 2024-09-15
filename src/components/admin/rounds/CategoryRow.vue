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
              v-model="row.name"
              :counter="10"
              label="Введите название категории"
              :disabled="row.disabled"
              hide-details
              required
            ></v-text-field>
          </v-col>
        </div>
        <div class="d-flex">
          <v-btn
            v-if="row.disabled"
            class="mr-6"
            @click="$emit('updateStateRow', row)"
            variant="outlined"
          >
            Редактировать
          </v-btn>
          <v-btn
            v-else-if="!row.disabled"
            class="mr-6"
            @click="$emit('updateRow', row)"
            variant="outlined"
          >
            Сохранить
          </v-btn>
          <v-btn
            v-if="row.disabled"
            @click="$emit('clearRow', row)"
            variant="outlined"
          >
            Очистить
          </v-btn>
          <v-btn
            v-else
            @click="$emit('cancelChangeRow', row)"
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
defineProps({
  row: {
    type: Object,
    default: null,
  },
})
</script>
