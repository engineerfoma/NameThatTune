<template>
  <div class="pa-0 text-center w-25">
    <v-dialog
      v-model="dialog"
      max-width="500"
    >
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          class="text-none font-weight-regular mt-3"
          width="200"
          height="56"
          variant="outlined"
          v-bind="activatorProps"
          >Начислить очки
        </v-btn>
      </template>
      <v-card title="Выбирите команду для начисления очков">
        <v-card-text>
          <v-text-field
            v-if="activeRound === '2'"
            v-model="diff"
            label="Введи количество очков"
            type="number"
            variant="outlined"
            required
          ></v-text-field>
          <v-row
            dense
            v-for="team in data"
            :key="team.id"
          >
            <v-col cols="12">
              <v-btn
                class="w-100 text-none font-weight-regular mb-2"
                variant="tonal"
                @click="handleSaveButton({ team, score })"
              >
                {{ team.name }}
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup>
const emits = defineEmits(['saveScore'])
const props = defineProps({
  data: {
    type: Array,
    default: null,
  },
  score: {
    type: Number,
  },
  activeRound: String,
})
const diff = ref(0)
const dialog = ref(false)

const handleSaveButton = (data) => {
  if (props.activeRound === '2') {
    emits('saveScore', { team: data.team, score: diff.value })
  } else {
    emits('saveScore', data)
  }
  dialog.value = false
}
</script>
