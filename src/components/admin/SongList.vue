<template>
  <div class="w-100">
    <div class="grid mt-6">
      <h2 class="text-center">Мелодии для игрового процесса</h2>
      <h2 class="text-center">Ответы</h2>
    </div>
    <div class="grid w-100">
      <div>
        <v-radio-group v-model="activeSong">
          <v-radio
            v-for="song in songs"
            :key="song.id"
            :label="String(song.id)"
            :value="song.id"
            class="width"
          >
            <template v-slot:label>
              <v-form class="w-100">
                <v-container class="w-100">
                  <v-row
                    class="d-flex flex-row align-center flex-sm-nowrap justify-space-between"
                  >
                    <div
                      class="w-100 d-flex flex-row align-center flex-sm-nowrap"
                    >
                      <v-col cols="12">
                        <InputFile
                          v-model="song.melodyPath"
                          class="w-100"
                        />
                        <!-- <audio
                          :key="song.melodyPath"
                          controls
                          Seeking
                          class="w-100"
                        >
                          <source
                            src="http://localhost:3000/src/assets/sounds/valerijj-meladze-ja-ne-mogu-bez-tebja.mp3"
                            type="audio/mpeg"
                          />
                          Your browser does not support the audio element.
                        </audio> -->
                        <audio
                        v-if="song.melodyPath"
                        :key="song.melodyPath"
                        controls
                        Seeking
                        class="w-100"
                      >
                        <source
                          :src="
                            song.melodyPath
                              ? URL.createObjectURL(song.melodyPath)
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
            </template>
          </v-radio>
        </v-radio-group>
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
                  <InputFile v-model="song.songPath" />
                  <!-- <audio
                    v-if="song.songPath"
                    :key="song.songPath"
                    controls
                    Seeking
                    class="w-100"
                  >
                    <source
                      :src="
                        song.songPath
                          ? URL.createObjectURL(song.songPath)
                          : null
                      "
                      type="audio/mpeg"
                    />
                    Your browser does not support the audio element.
                  </audio> -->
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
import { onMounted } from 'vue';

const props = defineProps({
  songs: {
    type: Array,
    default: null,
  },
})

const activeSong = ref('')
// const f = async () => {
//   const blob = await (
//     await fetch(
//       'http://localhost:3000/src/assets/sounds/valerijj-meladze-ja-ne-mogu-bez-tebja.mp3'
//     )
//   ).blob()

//   const dt = new DataTransfer()
//   dt.items.add(
//     new File([blob], 'valerijj-meladze-ja-ne-mogu-bez-tebja.mp3', {
//       type: 'audio/mpeg',
//     })
//   )
//   activeSong.value = dt.files
// }
// onMounted(async () => {
//   await f()

// })
// document.getElementById('fileInput').dispatchEvent(new Event('change'))

// const audioSrc = computed(() =>
//   props.song.path ? URL.createObjectURL(props.song.path) : null
// )
</script>

<style lang="scss" scoped>
.width {
  :deep(.v-label) {
    width: 100% !important;
  }
}
</style>
