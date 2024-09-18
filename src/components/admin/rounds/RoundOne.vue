<template>
  <Selected
    class="w-100"
    v-for="row in rows"
    :key="row.id"
    :title="'Категория ' + row.id"
  >
    <CategoryRow
      class="w-100"
      :row="row"
      @updateStateRow="handleUpdateState"
      @updateRow="handleUpdateRow"
      @clearRow="handlerClearRow"
      @cancelChangeRow="handleCancelChangeRow"
    />
    <SongList
      class="w-100"
      v-if="row.melodies.length"
      :songs="row.melodies"
      @updateRound="handleUpdateActiveSong"
    />
  </Selected>
</template>
<script setup>
import { onMounted } from 'vue'
import { category } from '@/services/api.service'
import { useAppStore } from '@/stores/app'
import SongList from '../SongList.vue'
const rows = ref([])

const store = useAppStore()

const handleUpdateState = (data) => {
  data.disabled = false
}

const handleUpdateRow = async (data) => {
  data.disabled = true
  await category.edit(data.id, {
    name: data.name,
  })
  await getCategories()
}

const handlerClearRow = (data) => {
  data.name = ''
  data.disabled = false
}

const handleCancelChangeRow = async (data) => {
  data.disabled = true
  await getCategories()
  console.log(data)
}

const getCategories = async () => {
  try {
    const data = await store.getRound(1)
    rows.value = data
  } catch (e) {
    alert(`ошибка: ${e}`)
  }
}

const handleUpdateActiveSong = async () => {
  await getCategories()
}

onMounted(async () => {
  await getCategories()
})
</script>

<style lang="scss"></style>
