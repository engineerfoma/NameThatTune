<template>
  <div class="w-100">
    <div class="grid-header mt-6">
      <v-tooltip text="Отменить активную песню">
        <template v-slot:activator="{ props }">
          <img
            @click="removeActiveSong"
            v-bind="props"
            class="img-header"
            src="@/assets/icons/delete.svg"
            alt="delete"
          />
        </template>
      </v-tooltip>
      <div class="d-flex justify-space-between w-100">
        <div class="w-100">
          <h2 class="text-center">Мелодии для игрового процесса</h2>
        </div>
        <div class="w-100">
          <h2 class="text-center">Ответы</h2>
        </div>
      </div>
    </div>
    <pre>
      {{ songs }}
    </pre>
    <pre>
      {{ activeSong.value }}
    </pre>
    <div class="grid w-100">
      <div class="display-grid">
        <v-radio-group
          v-model="activeSong.value"
          class="d-flex flex-column justify-space-between"
        >
          <v-radio
            v-for="song in songs"
            :key="song.id"
            :value="song.id"
            class="width"
          >
          </v-radio>
        </v-radio-group>
        <div>
          <v-form
            class="w-100"
            v-for="song in songs"
            :key="song.id"
          >
            <v-container class="w-100">
              <v-row
                class="d-flex flex-row align-center flex-sm-nowrap justify-space-between"
              >
                <div class="w-100 d-flex flex-row align-center flex-sm-nowrap">
                  <v-col cols="12">
                    <div class="d-flex align-center ga-4">
                      <InputFile
                        v-model="song.melodyPath"
                        :id="song.id"
                        class="w-100"
                      />
                      <img
                        @click="removeMelody(song)"
                        class="img"
                        src="@/assets/icons/delete.svg"
                        alt="delete"
                      />
                    </div>
                    <audio
                      v-if="song.melodyPath"
                      :key="song.id"
                      controls
                      class="w-100"
                    >
                      <source
                        :src="
                          song.melodyPath
                            ? `http://localhost:3000/src/assets/melodies/${song.melodyPath}`
                            : null
                        "
                        type="audio/mpeg"
                      />
                      Your browser does not support the audio element.
                    </audio>
                  </v-col>
                </div>
              </v-row>
            </v-container>
          </v-form>
        </div>
      </div>
      <div>
        <v-form
          v-for="song in songs"
          :key="song.id"
          :label="String(song.id)"
          :value="song.id"
        >
          <v-container>
            <v-row
              class="w-100 d-flex flex-row align-center flex-sm-nowrap justify-space-between"
            >
              <div class="w-100 d-flex flex-row align-center flex-sm-nowrap">
                <v-col
                  cols="12"
                  class="w100"
                >
                  <div class="d-flex align-center ga-4">
                    <InputFile
                      v-model="song.songPath"
                      :id="song.id"
                      song
                    />
                    <img
                      @click="removeSong(song)"
                      class="img"
                      src="@/assets/icons/delete.svg"
                      alt="delete"
                    />
                  </div>
                  <audio
                    v-if="song.songPath"
                    :key="song.id"
                    controls
                    class="w-100"
                  >
                    <source
                      :src="
                        song.songPath
                          ? `http://localhost:3000/src/assets/shortSongs/${song.songPath}`
                          : null
                      "
                      type="audio/mpeg"
                    />
                    Your browser does not support the audio element.
                  </audio>
                </v-col>
              </div>
            </v-row>
          </v-container>
        </v-form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { melody } from '../../services/api.service'

const props = defineProps({
  songs: {
    type: Array,
    default: null,
  },
})

const activeSong = reactive({
  value: '',
})

watch(
  activeSong,
  () => {
    if (activeSong.value) {
      const currentSong = props.songs.find(
        (song) => song.id === activeSong.value
      )
      props.songs.forEach(async (song) => {
        melody
          .edit({
            id: song.id,
            status: 'null',
          })
          .then((res) => {
            song.status = res.data.status
          })
      })

      melody
        .edit({
          id: currentSong.id,
          status: 'active',
        })
        .then((res) => {
          currentSong.status = res.data.status || null
          activeSong.value = res.data.id
        })
    }
  },
  { deep: true }
)

const removeMelody = async (data) => {
  try {
    const response = await melody.edit({
      id: data.id,
      melodyPath: '',
    })
    data.melodyPath = response.data.melodyPath
  } catch (e) {
    alert(`ошибка: ${e}`)
  }
}

const removeSong = async (data) => {
  try {
    const response = await melody.edit({
      id: data.id,
      songPath: '',
    })
    data.songPath = response.data.songPath
  } catch (e) {
    alert(`ошибка: ${e}`)
  }
}

const removeActiveSong = async () => {
  if (activeSong.value) {
    const currentSong = props.songs.find((song) => song.id === activeSong.value)
    activeSong.value = ''
    const response = await melody.edit({
      id: currentSong.id,
      status: 'null',
    })
  }
}
</script>

<style lang="scss" scoped>
.width {
  :deep(.v-label) {
    width: 100% !important;
  }
}
.img {
  width: 20px;
  margin-bottom: 20px;
  transition: opacity 0.3s ease;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  &-header {
    transition: opacity 0.3s ease;
    width: 25px;
    margin: 0 auto;

    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
}

.display-grid {
  display: grid;
  grid-template-columns: 50px 1fr;
  :deep(.v-input__control) {
    justify-content: space-between;
    height: 100%;
  }

  :deep(.v-selection-control-group) {
    justify-content: space-between;
    height: 100%;
  }
}

.grid-header {
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 30px;
}
</style>
