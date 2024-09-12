<template>
  <div>
    <div class="d-flex justify-end ga-5">
      <v-btn
        append-icon="mdi-plus"
        @click="addForm"
        :disabled="forms.length >= 6 || disabledStateButton"
        variant="outlined"
        >Добавить команду</v-btn
      >
      <v-btn
        @click="removeAllTeams"
        variant="outlined"
      >
        Удалить все команды
        <img
          class="svg"
          src="@/assets/icons/delete.svg"
          alt="delete"
        />
      </v-btn>
    </div>
    <div
      class="pt-6 d-flex ga-sm-6 flex-row w-100 flex-column"
      v-if="forms.length"
    >
      <Form
        v-for="form in forms"
        :key="form.id"
        :data="form"
        @removeForm="removeFormHandler"
        @createTeam="handlerCreateTeam"
        @updateRow="handleUpdateRow"
      />
      {{ forms }}
    </div>
  </div>
</template>

<script setup>
import { team } from '@/services/api.service'
import { onMounted } from 'vue'

const forms = ref([])

const disabledStateButton = computed(() => {
  return !!forms.value.find((form) => !form.created)
})

const addForm = () => {
  forms.value.push({
    id: Math.floor(Math.random() * 1000),
    name: '',
    color: '',
    score: 0,
    created: false,
  })
}

const removeAllTeams = async () => {
  const data = await team.removeAll()
  console.log(data)
}

const handlerCreateTeam = async (props) => {
  if (!props.name || !props.color) {
    return alert('Заполните все поля!')
  }

  props.created = true

  return await team.add({
    id: props.id,
    name: props.name,
    color: props.color,
    score: 0,
  })
}

const getTeams = async () => {
  const { data } = await team.get()
  return data
}

const removeFormHandler = async (index) => {
  const { status, statusText } = await team.remove(index)

  if (status !== 200) {
    return alert(`ошибка! ${statusText}`)
  }
  console.log(forms.value)

  forms.value = forms.value.filter((form) => {
    return form.id !== index
  })
}

const handleUpdateRow = (data) => {
  data.created = false
}

onMounted(async () => {
  const teams = await getTeams()

  if (teams.length) teams.forEach((team) => forms.value.push(team))
})
</script>

<style lang="scss" scoped></style>
