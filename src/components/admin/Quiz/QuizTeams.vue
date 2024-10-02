<template>
  <div class="mt-6">
    <div class="d-flex justify-end ga-5">
      <v-btn
        append-icon="mdi-plus"
        @click="addForm"
        :disabled="teams.length >= 6 || disabledStateButton"
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
      class="pt-6 d-flex flex-row w-100 flex-column"
      v-if="teams.length"
    >
      <QuizTeamsRow
        v-for="form in teams"
        :key="form.id"
        :data="form"
        @removeForm="removeFormHandler"
        @createTeam="handlerCreateTeam"
        @updateStateForm="handleUpdateStateForm"
        @cancelForm="handleCancelForm"
        @updateForm="handleUpdateForm"
        @saveScore="hanldeSaveScore"
      />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'
import { team } from '@/services/api.service'
import { onMounted } from 'vue'
import QuizTeamsRow from './QuizTeamsRow.vue';
const store = useAppStore()
const { teams } = storeToRefs(store)

const disabledStateButton = computed(() => {
  return !!teams.value.find((form) => !form.disabled)
})

const addForm = () => {
  teams.value.push({
    name: '',
    color: '',
    score: 0,
    disabled: false,
    new: true,
  })
}

const removeAllTeams = async () => {
  const { status } = await team.removeAll()
  if (status !== 200) {
    return alert(`ошибка ${status}`)
  }
  teams.value = []
  await getTeams()
}

const handlerCreateTeam = async (props) => {
  if (!props.name || !props.color) {
    return alert('Заполните все поля!')
  }
  props.new = false
  props.disabled = true

  const { data } = await team.add({
    name: props.name,
    color: props.color,
    score: 0,
  })

  props.id = data.id
  await getTeams()
  return props
}

const handleUpdateForm = async (props) => {
  const { data } = await team.edit({
    id: props.id,
    name: props.name,
    color: props.color,
    score: props.score,
  })
  props.new = false
  props.disabled = true
  props = {
    ...data,
  }
  await getTeams()
  return props
}

const getTeams = async () => {
  return await store.getTeams()
}

const removeFormHandler = async (index) => {
  const { status, statusText } = await team.remove(index)

  if (status !== 200) {
    return alert(`ошибка! ${statusText}`)
  }

  teams.value = teams.value.filter((form) => {
    return form.id !== index
  })
  await getTeams()
}

const handleCancelForm = async (data) => {
  data.disabled = true
  await getTeams()
}

const handleUpdateStateForm = (data) => {
  data.disabled = false
}

const hanldeSaveScore = async (props) => {
  const resultScore = Number(props.data.score) + Number(props.diff)
  const { data } = await team.edit({
    id: props.data.id,
    name: props.data.name,
    color: props.data.color,
    score: Number(resultScore),
  })

  const currentForm = teams.value.find((form) => form.id === props.data.id)
  currentForm.score = data.score
  await getTeams()
  return currentForm
}

onMounted(async () => {
  await getTeams()
})
</script>

<style lang="scss" scoped></style>
