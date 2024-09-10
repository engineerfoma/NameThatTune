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
          v-if="note.active"
          class="note__single"
          width="239"
          cover
          src="@/assets/imgs/note-active.png"
        >
          <div class="note__single_title red">
            {{ note.title }}
          </div>
        </v-img>
        <v-img
          v-else
          class="note__single"
          width="239"
          cover
          src="@/assets/imgs/note.png"
        >
          <div class="note__single_title">
            {{ note.title }}
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
          v-if="note.active"
          class="note__single"
          width="239"
          cover
          src="@/assets/imgs/note-active.png"
        >
          <div class="note__single_title red">
            {{ note.title }}
          </div>
        </v-img>
        <v-img
          v-else
          class="note__single"
          width="239"
          cover
          src="@/assets/imgs/note.png"
        >
          <div class="note__single_title">
            {{ note.title }}
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
  props.data.filter(
    (el) => el.title === '1' || el.title === '3' || el.title === '5'
  )
)
const arrayBottom = computed(() =>
  props.data.filter(
    (el) => el.title === '2' || el.title === '4' || el.title === '6' || el.title === '7'
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
