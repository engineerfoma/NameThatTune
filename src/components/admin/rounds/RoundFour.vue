<template>
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
</template>
<script setup>
import Song from '../SongList.vue'
const row = reactive(
  {
    id: 1,
    disabled: false,
    songs: [
      { id: 1, path: null },
      { id: 2, path: null },
      { id: 3, path: null },
      { id: 4, path: null },
      { id: 5, path: null },
      { id: 6, path: null },
      { id: 7, path: null },
    ],
    rightSongs: [
      { id: 1, path: null },
      { id: 2, path: null },
      { id: 3, path: null },
      { id: 4, path: null },
      { id: 5, path: null },
      { id: 6, path: null },
      { id: 7, path: null },
    ],
  },
)
</script>

<style lang="scss">
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
