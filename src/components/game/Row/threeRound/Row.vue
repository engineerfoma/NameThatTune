<template>
  <div class="row d-flex align-center">
    <div class="row__wrapper">
      <svg
        class="row__img d-flex align-center justify-center"
        :class="{ row__border_active: data.current }"
        width="425"
        height="120"
        viewBox="0 0 425 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 5H420L402.311 115H0"
          stroke="white"
          stroke-width="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="1 37"
        />
      </svg>
      <span
        :class="{ row__title_active: data.current }"
        class="row__title"
        :title="data.title.toUpperCase()"
        >{{ data.title.toUpperCase() }}</span
      >
    </div>

    <div
      class="d-flex align-center"
      v-for="note in data.songs"
    >
      <v-img
        class="row__line"
        minWidth="100"
        height="10"
        cover
        src="@/assets/icons/line.png"
      >
      </v-img>
      <v-img
        v-if="note === data.active"
        class="row__note"
        width="137"
        cover
        src="@/assets/imgs/note-active.png"
      >
        <div
          class="row__note_wrapper"
          :class="{ red: note === data.active }"
        >
          {{ note }}
        </div>
      </v-img>
      <v-img
        v-else-if="data.current"
        class="row__note"
        width="137"
        cover
        src="@/assets/imgs/note-current.png"
      >
        <div
          class="row__note_wrapper"
          :class="{ current: data.current }"
        >
          {{ note }}
        </div>
      </v-img>
      <v-img
        v-else
        class="row__note"
        width="137"
        cover
        src="@/assets/imgs/note.png"
      >
        <div class="row__note_wrapper">
          {{ note }}
        </div>
      </v-img>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    default: null,
  },
})
</script>

<style lang="scss" scoped>
.row {
  &__wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__border {
    &_active {
      fill: white;
      :deep(path) {
        width: 100%;
        stroke: none;
      }
    }
  }
  &__title {
    position: absolute;
    font-size: 43px;
    font-weight: 500;
    color: white;
    padding-top: 43px;
    margin-right: 35px;
    width: fit-content;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.3em;

    &_active {
      color: black;
    }
  }

  &__img {
    margin-top: 40px;
    margin-right: 35px;
  }

  &__line {
    margin-top: 40px;
    margin-right: 24px;
  }

  &__note {
    position: relative;
    &_wrapper {
      position: absolute;
      right: 44%;
      top: 50%;
      border-radius: 50%;
      background-color: #ffffff33;
      width: 52px;
      height: 52px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 36px;
      font-weight: 700;
    }
  }
}

.current {
  background-color: #ffffff80;
}

.red {
  background-color: #ea0029cc;
}
</style>
