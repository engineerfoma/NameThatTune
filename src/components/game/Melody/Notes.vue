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
          v-if="note.status === 'active'"
          class="note__single"
          width="239"
          cover
          src="@/assets/imgs/note-active.png"
        >
          <div class="note__single_title red">
            {{ note.points }}
          </div>
        </v-img>
        <v-img
          v-else
          class="note__single"
          :class="{ note__single_completed: note.completed }"
          width="239"
          cover
          src="@/assets/imgs/note.png"
        >
          <div class="note__single_title">
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
          v-if="note.status === 'active'"
          class="note__single"
          width="239"
          cover
          src="@/assets/imgs/note-active.png"
        >
          <div class="note__single_title red">
            {{ note.points }}
          </div>
        </v-img>
        <v-img
          v-else
          class="note__single"
          :class="{ note__single_completed: note.completed }"
          width="239"
          cover
          src="@/assets/imgs/note.png"
        >
          <div class="note__single_title">
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
  // margin-left: 29px;
  margin: 181px auto 0;
  display: flex;
  flex-direction: column;
  // max-width: 675px;
  // row-gap: 185px;
  // column-gap: 99px;
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
      opacity: 0.3;
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
      font-size: 36px;
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
</style>
