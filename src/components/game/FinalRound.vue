<template>
  <v-fade-transition>
    <div
      v-if="!expand"
      class="d-flex h-100"
    >
      <div
        class="timer"
        :class="{ timer__active: timerStatus }"
      >
        00:{{ timer }}
      </div>

      <div class="aside">
        <img
          class="logo"
          width="211"
          cover
          src="@/assets/icons/logo.svg"
        />
        <svg
          width="493"
          height="134"
          viewBox="0 0 493 134"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M180.622 93V86.68H177.342C168.542 86.68 164.222 81.8 164.222 72.84V57.56C164.222 48.6 168.542 43.72 177.342 43.72H180.622V37H189.262V43.72H192.542C201.342 43.72 205.662 48.6 205.662 57.56V72.84C205.662 81.8 201.342 86.68 192.542 86.68H189.262V93H180.622ZM192.542 51.48H189.262V79H192.542C195.342 79 196.942 77.4 196.942 73.4V57C196.942 53 195.342 51.48 192.542 51.48ZM180.622 79V51.48H177.342C174.542 51.48 172.942 53 172.942 57V73.4C172.942 77.4 174.542 79 177.342 79H180.622ZM227.983 67.32L220.623 93H211.583V37H219.423V72.44L222.623 60.12L229.823 37H239.503V93H231.583V53.56L227.983 67.32ZM254.523 69V93H245.723V37H254.523V61H264.523V37H273.483V93H264.523V69H254.523ZM299.384 37L308.344 93H299.464L297.944 82.84H287.144L285.624 93H277.544L286.504 37H299.384ZM292.504 46.92L288.264 75.24H296.744L292.504 46.92ZM309.962 93.08V85.08C313.962 85.08 315.242 84.52 315.402 79.32L316.842 37H341.722V93H332.762V45H325.082L324.122 78.84C323.802 89.08 320.122 93.08 311.322 93.08H309.962Z"
            fill="white"
          />
          <path
            d="M5 5H488L467.495 129H5"
            stroke="white"
            stroke-width="10"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="1 31"
          />
        </svg>
      </div>
      <Notes
        v-if="rows.length"
        :data="rows"
      />
    </div>
  </v-fade-transition>
</template>

<script setup>
import Notes from './Notes.vue'
import { useAppStore } from '@/stores/app'

defineProps({
  expand: {
    type: Boolean,
  },
})
const rows = ref(null)
const timer = ref(30)
const timerStatus = ref(false)

let interval = null

watch(timerStatus, () => {
  if (timerStatus.value) {
    interval = setInterval(() => {
      timer.value -= 1
    }, 1000)
  } else {
    clearInterval(interval) // Останавливаем счётчик
    interval = null
  }
})

onUnmounted(() => {
  clearInterval(interval)
})

const store = useAppStore()
window.addEventListener('storage', (event) => {
  if (event.key === 'sharedRound4') {
    store.roundFour = JSON.parse(event.newValue) // Обновляем состояние
    rows.value = store.roundFour
  }

  if (event.key === 'play') {
    timerStatus.value = JSON.parse(event.newValue) // Обновляем состояние
  }
})
store.roundFour = JSON.parse(localStorage.getItem('sharedRound4') || '')
rows.value = store.roundFour
</script>
<style lang="scss" scoped>
.logo {
  margin: 45px 0 0 57px;
  margin-bottom: 316px;
}

.aside {
  display: flex;
  flex-direction: column;
}

.timer {
  position: absolute;
  left: 6%;
  top: 60%;
  font-size: 100px;
  font-weight: 700;
  transition: color 0.3s ease;
  color: rgba(255, 255, 255, 1);

  &__active {
    color: red;
  }
}
</style>
