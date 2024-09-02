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
        @click="addTeam"
        >Добавить команду</v-btn
      >
      <v-btn
        append-icon="mdi-check-circle"
        @click="getTeams"
        >получить список команд</v-btn
      >
    </div>
    <div>

    </div>
  </div>
</template>
<script setup>
import { team } from '@/services/api.service'

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
</script>
