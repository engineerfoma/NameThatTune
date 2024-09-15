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
    <SongList class="w-100" v-if="row.melodies.length" :songs="row.melodies" />
  </Selected>
</template>
<script setup>
import { onMounted } from 'vue'
import { round } from '@/services/api.service'
import SongList from '../SongList.vue'
const rows = reactive([])
//   {
//     id: 1,
//     name: '',
//     active: '',
//     disabled: false,
//     songs: [
//       { id: 1, path: null },
//       { id: 2, path: null },
//       { id: 3, path: null },
//       { id: 4, path: null },
//     ],
//     rightSongs: [
//       { id: 1, path: null },
//       { id: 2, path: null },
//       { id: 3, path: null },
//       { id: 4, path: null },
//     ],
//   },
//   {
//     id: 2,
//     name: '',
//     disabled: false,
//     songs: [
//       { id: 1, path: null },
//       { id: 2, path: null },
//       { id: 3, path: null },
//       { id: 4, path: null },
//     ],
//     rightSongs: [
//       { id: 1, path: null },
//       { id: 2, path: null },
//       { id: 3, path: null },
//       { id: 4, path: null },
//     ],
//   },
//   {
//     id: 3,
//     name: '',
//     disabled: false,
//     songs: [
//       { id: 1, path: null },
//       { id: 2, path: null },
//       { id: 3, path: null },
//       { id: 4, path: null },
//     ],
//     rightSongs: [
//       { id: 1, path: null },
//       { id: 2, path: null },
//       { id: 3, path: null },
//       { id: 4, path: null },
//     ],
//   },
//   {
//     id: 4,
//     name: '',
//     disabled: false,
//     songs: [
//       { id: 1, path: null },
//       { id: 2, path: null },
//       { id: 3, path: null },
//       { id: 4, path: null },
//     ],
//     rightSongs: [
//       { id: 1, path: null },
//       { id: 2, path: null },
//       { id: 3, path: null },
//       { id: 4, path: null },
//     ],
//   },
// ])

const handleUpdateState = (data) => {
  data.disabled = false
  console.log(data)
}

const handleUpdateRow = (data) => {
  data.disabled = true
  console.log(data)
}

const handlerClearRow = (data) => {
  data.name = ''
  data.disabled = false
}

const handleCancelChangeRow = (data) => {
  // сделать гет запрос конкретной категории с данными
  data.disabled = true

  console.log(data)
}

const getCategories = async () => {
  try {
    const { data } = await round.getById(1)
    console.log(data)
    data.forEach((el) => {
      console.log(el)

      rows.push(el)
    })
    console.log(rows)
  } catch (e) {
    alert(e)
  }
}

onMounted(async () => {
  await getCategories()
})
</script>

<style lang="scss">
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
