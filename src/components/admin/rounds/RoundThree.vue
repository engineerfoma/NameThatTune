<template>
  <Selected
    v-for="row in rows"
    :key="row.id"
    :title="'Категория ' + row.id"
  >
    <CategoryRow
      :row="row"
      @updateStateRow="handleUpdateState"
      @updateRow="handleUpdateRow"
      @clearRow="handlerClearRow"
      @cancelChangeRow="handleCancelChangeRow"
    />
    <div class="grid mt-6">
      <div>
        <h2 class="text-center">Мелодии для игрового процесса</h2>
        <Song
          v-for="song in row.songs"
          :song="song"
          :key="song.id"
        />
      </div>
      <div>
        <h2 class="text-center">Ответы</h2>
        <Song
          v-for="song in row.rightSongs"
          :song="song"
          :key="song.id"
        />
      </div>
    </div>
  </Selected>
</template>
<script setup>
import Song from '../SongList.vue'
const rows = ref([
  {
    id: 1,
    name: '',
    disabled: false,
    songs: [
      { id: 1, path: null },
      { id: 2, path: null },
      { id: 3, path: null },
      { id: 4, path: null },
      { id: 5, path: null },
    ],
    rightSongs: [
      { id: 1, path: null },
      { id: 2, path: null },
      { id: 3, path: null },
      { id: 5, path: null },
    ],
  },
  {
    id: 2,
    name: '',
    disabled: false,
    songs: [
      { id: 1, path: null },
      { id: 2, path: null },
      { id: 3, path: null },
      { id: 4, path: null },
      { id: 5, path: null },
    ],
    rightSongs: [
      { id: 1, path: null },
      { id: 2, path: null },
      { id: 3, path: null },
      { id: 4, path: null },
      { id: 5, path: null },
    ],
  },
  {
    id: 3,
    name: '',
    disabled: false,
    songs: [
      { id: 1, path: null },
      { id: 2, path: null },
      { id: 3, path: null },
      { id: 4, path: null },
      { id: 5, path: null },
    ],
    rightSongs: [
      { id: 1, path: null },
      { id: 2, path: null },
      { id: 3, path: null },
      { id: 4, path: null },
      { id: 5, path: null },
    ],
  },
  {
    id: 4,
    name: '',
    disabled: false,
    songs: [
      { id: 1, path: null },
      { id: 2, path: null },
      { id: 3, path: null },
      { id: 4, path: null },
      { id: 5, path: null },
    ],
    rightSongs: [
      { id: 1, path: null },
      { id: 2, path: null },
      { id: 3, path: null },
      { id: 4, path: null },
      { id: 5, path: null },
    ],
  },
  {
    id: 5,
    name: '',
    disabled: false,
    songs: [
      { id: 1, path: null },
      { id: 2, path: null },
      { id: 3, path: null },
      { id: 4, path: null },
      { id: 5, path: null },
    ],
    rightSongs: [
      { id: 1, path: null },
      { id: 2, path: null },
      { id: 3, path: null },
      { id: 4, path: null },
      { id: 5, path: null },
    ],
  },
])

const handleUpdateState = (data) => {
  data.disabled = false
}

const handleUpdateRow = (data) => {
  data.disabled = true
}

const handlerClearRow = (data) => {
  data.name = ''
  data.disabled = false
}

const handleCancelChangeRow = (data) => {
  // сделать гет запрос конкретной категории с данными
  data.disabled = true

}
</script>

<style lang="scss">
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
