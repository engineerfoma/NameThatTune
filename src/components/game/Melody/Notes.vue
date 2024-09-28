<template>
  <div class="notes">
    <div class="notes__top">
      <div
        class="note"
        v-for="(note, index) in arrayTop"
        :key="index"
        :class="{ 'note-p': index === 0 }"
      >
        <v-img
          class="note__single"
          :class="note.status === 'active' ? 'visible' : 'hidden'"
          width="239"
          cover
          src="@/assets/imgs/note-active.png"
        >
          <div class="note__single_title red game-text">
            {{ note.points }}
          </div>
        </v-img>
        <v-img
          class="note__single"
          :class="[
            note.status !== 'active' && note.completed ? 'note__single_completed' : '',
            note.status !== 'active' ? 'visible' : 'hidden',
          ]"
          width="239"
          cover
          src="@/assets/imgs/note.png"
        >
          <div class="note__single_title game-text">
            {{ note.points }}
          </div>
        </v-img>
        <v-img
          class="note__single_diagonal"
          width="78"
          cover
          src="@/assets/imgs/diagonal.png"
        />
      </div>
    </div>
    <div class="notes__bottom">
      <div
        class="note"
        v-for="(note, index) in arrayBottom"
        :key="index"
      >
        <v-img
          class="note__single"
          :class="note.status === 'active' ? 'visible' : 'hidden'"
          width="239"
          cover
          src="@/assets/imgs/note-active.png"
        >
          <div class="note__single_title red game-text">
            {{ note.points }}
          </div>
        </v-img>
        <v-img
          class="note__single"
          :class="[
            note.status !== 'active' && note.completed ? 'note__single_completed' : '',
            note.status !== 'active' ? 'visible' : 'hidden',
          ]"
          width="239"
          cover
          src="@/assets/imgs/note.png"
        >
          <div class="note__single_title game-text">
            {{ note.points }}
          </div>
        </v-img>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  data: {
    type: Array,
    default: null,
  },
})

const arrayTop = computed(() =>
  props.data.filter((el) => el.id === 66 || el.id === 68 || el.id === 70)
)
const arrayBottom = computed(() =>
  props.data.filter(
    (el) => el.id === 67 || el.id === 69 || el.id === 71 || el.id === 72
  )
)
</script>

<style lang="scss" scoped>
.notes {
  position: relative;
  margin: 181px auto 0;
  display: flex;
  flex-direction: column;
  height: 800px;

  &__top {
    display: flex;
    gap: 100px;
  }

  &__bottom {
    display: flex;
    gap: 100px;
  }
}

.note {
  width: fit-content;
  &__single {
    position: relative;

    &_completed {
      opacity: 0.3!important;
    }

    &_diagonal {
      margin-top: 23px;
      margin-bottom: 26px;
    }

    &_title {
      position: absolute;
      right: 44%;
      top: 50%;
      border-radius: 50%;
      background-color: #ffffff33;
      width: 91px;
      height: 91px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 55px;
      font-weight: 700;
    }
  }

  &-p {
    padding-left: 241px;
  }
}

.red {
  background-color: #ea0029cc;
}

.visible {
  position: relative;
  opacity: 1;
  &__completed {
    opacity: 0.5;
  }
}

.hidden {
  position: absolute;
  opacity: 0;
}
</style>
