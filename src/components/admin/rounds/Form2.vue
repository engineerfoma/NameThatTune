<template>
  <h2>{{ workerData }}</h2>
  <v-tooltip
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
        @click="handleClick"
        icon="mdi-check-circle"
      ></v-icon>
    </template>
  </v-tooltip>
</template>
<script setup>
const workerData = ref('2')
const worker = new SharedWorker('worker.js')
const port = worker.port
const handleClick = () => {
  port.onmessage = (e) => {
    console.log(e.data)
    console.log(5)
    workerData.value = e.data
  }
}
</script>
