<template>
  <div>
    <div>
      <v-btn @click="removeAllTeams">
        Удалить все команды
        <img
          class="svg"
          src="@/assets/icons/delete.svg"
          alt="delete"
        />
      </v-btn>
      <v-btn
        append-icon="mdi-plus"
        @click="addForm"
        :disabled="forms.length >= 6"
        >Добавить команду</v-btn
      >
      <!-- <v-btn
        append-icon="mdi-plus"
        @click="addTeam"
        >Добавить команду api</v-btn
      > -->
      <v-btn
        append-icon="mdi-check-circle"
        @click="getTeams"
        >получить список команд</v-btn
      >
    </div>
    <div
      class="pt-6 d-flex ga-sm-6 flex-row w-100 flex-column"
      v-if="forms.length"
    >
      <Form
        v-for="(form, index) in forms"
        :key="form.id"
        :data="form"
        :index="index"
        @removeForm="removeFormHandler"
      />
      {{ forms }}
    </div>
  </div>
</template>
<script setup>
import { team } from '@/services/api.service'

const forms = ref([])

const addForm = () => {
  forms.value.push({
    id: Math.floor(Math.random() * 100),
    name: '',
    color: '',
    points: 0,
    complete: false,
  })
}

const removeAllTeams = async () => {
  const data = await team.removeAll()
  console.log(data)
}

const addTeam = async () => {
  const data = await team.add({
    id: '1',
    name: 'zaasflupa',
    color: 'yellow',
  })
  console.log(data)
}

const getTeams = async () => {
  const data = await team.get()
  console.log(data)
}

const removeFormHandler = (index) => {
  console.log('index ', index)

  forms.value.splice(index, 1)
}
</script>
