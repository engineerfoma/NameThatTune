<template>
  <div
    class="w-100"
    v-if="currentCategory.melodies"
  >
    <div class="grid-header mt-6">
      <v-tooltip text="сбросить состояние мелодий">
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
    <div class="grid w-100">
      <div class="display-grid">
        <v-radio-group
          v-model="currentCategory.activeMelodyId"
          class="d-flex flex-column justify-space-between"
        >
          <v-radio
            v-for="song in currentCategory.melodies"
            :key="song.id"
            :value="song.id"
            class="width"
            @change="onChangeSong({ id: song.id, categoryId: song.categoryId })"
          />
        </v-radio-group>
        <div>
          <v-form
            class="w-100"
            v-for="song in currentCategory.melodies"
            :key="song.id"
          >
            <v-container class="w-100">
              <v-row
                class="d-flex flex-row align-center flex-sm-nowrap justify-space-between"
              >
                <div class="w-100 d-flex flex-row align-center flex-sm-nowrap">
                  <v-col cols="12">
                    <div class="d-flex align-center ga-4">
                      <div class="position-relative w-100">
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
                      <v-checkbox
                        v-tooltip="'Завершить'"
                        v-model="song.completed"
                        @click="onCompleted(song)"
                      ></v-checkbox>
                    </div>
                    <audio
                      v-if="song.melodyPath"
                      ref="audio"
                      :key="song.melodyPath"
                      @play="onPlay"
                      @pause="onPause"
                      controls
                      class="w-100"
                    >
                      <source
                        :src="
                          song.melodyPath
                            ? `/src/assets/melodies/${song.melodyPath}`
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
      <div class="d-flex flex-column justify-space-between">
        <v-form
          v-for="song in currentCategory.melodies"
          :key="song.id"
          :label="String(song.id)"
          :value="song.id"
        >
          <v-container>
            <v-row
              class="d-flex flex-row align-start flex-sm-nowrap justify-space-between"
            >
              <div class="w-100 d-flex flex-row align-center flex-sm-nowrap">
                <v-col
                  cols="12"
                  class="w100"
                >
                  <div class="d-flex align-center ga-4">
                    <div class="position-relative w-100">
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
                          ? `/src/assets/shortSongs/${song.songPath}`
                          : null
                      "
                      type="audio/mpeg"
                    />
                    Your browser does not support the audio esdlement.
                  </audio>
                </v-col>
              </div>
              <ModalAddPointsInCategory
                :data="teams"
                :score="song.points"
                @saveScore="onChangeScore"
                :activeRound="activeRound"
              />
            </v-row>
          </v-container>
        </v-form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { melody, team, category } from '../../services/api.service'
import { useAppStore } from '@/stores/app'
import ModalAddPointsInCategory from './ModalAddPointsInCategory.vue'
const store = useAppStore()
const { teams } = storeToRefs(store)

const emits = defineEmits(['updateRound'])
const props = defineProps({
  currentCategory: {
    type: Object,
    default: null,
  },
  secondRound: Boolean,
  rowId: Number,
  activeRound: String,
})

const audio = ref([])

const onPlay = () => {
  if (props.secondRound) {
    localStorage.setItem(`play`, true)
    localStorage.setItem(`activeCategory`, props.rowId)
  }
}

const onPause = () => {
  if (props.secondRound) {
    localStorage.setItem(`play`, false)
  }
}

const onChangeSong = async (data) => {
  await melody.activateStatus(data.id)
  emits('updateRound')
}

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
  await melody.reset()
  await category.edit(props.currentCategory.id, {
    activeMelodyId: 0,
  })
  emits('updateRound')
}

const onCompleted = async (data) => {
  data.completed = !data.completed
  if (props.activeRound === '3') {
    try {
      await melody.editForThirdRound(data.id, data.completed)
    } catch (e) {
      alert(`ошибка: ${e}`)
    }
  } else {
    try {
      const response = await melody.edit({
        id: data.id,
        completed: data.completed,
      })
      data.completed = response.data.completed
    } catch (e) {
      alert(`ошибка: ${e}`)
    }
  }
  emits('updateRound')
}

const onChangeScore = async (data) => {
  const resultScore = Number(data.team.score) + Number(data.score)

  await team.edit({
    id: data.team.id,
    score: resultScore,
  })
  await store.getTeams()
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
  position: absolute;
  right: 20px;
  top: 18px;

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

.gap {
  gap: 45px;
}
</style>
