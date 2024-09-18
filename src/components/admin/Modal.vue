<template>
  <div class="pa-0 text-center">
    <v-dialog
      v-model="dialog"
      max-width="300"
    >
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          class="text-none font-weight-regular"
          text="Изменить очки"
          variant="tonal"
          v-bind="activatorProps"
          >{{ data.score }}
        </v-btn>
      </template>
      <v-card title="Добавить/отнять очки">
        <v-card-text>
          <v-row dense>
            <v-col cols="12">
              <v-text-field
                v-model="diff"
                label="Введи количество очков"
                type="number"
                variant="outlined"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text="Отменить"
            variant="plain"
            @click="handleClose"
          ></v-btn>

          <v-btn
            color="primary"
            text="Сохранить"
            variant="tonal"
            @click="handleSaveButton({diff, data})"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup>
const emits = defineEmits(['saveScore'])
const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})
const diff = ref(0)
const dialog = ref(false)
const handleClose = () => {
  diff.value = 0
  dialog.value = false
}
const handleSaveButton = (props) => {
  emits('saveScore', props)
  dialog.value = false
}
</script>
