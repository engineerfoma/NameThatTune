<template>
  <div
    class="row d-flex align-center"
    :class="{ completed: data.completed }"
  >
    <div class="row__wrapper">
      <svg
        class="row__img d-flex align-center justify-center"
        :class="{ row__border_active: data.status === 'active' }"
        height="120"
        viewBox="0 0 556 134"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-1 5H555L534.495 129H-1"
          stroke="white"
          stroke-width="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="1 30"
          transform="scale(1)"
        />
      </svg>
      <span
        :class="{ row__title_active: data.status === 'active' }"
        class="row__title"
        :title="data.name.toUpperCase()"
        >{{ data.name.toUpperCase() }}</span
      >
    </div>
    <div
      class="d-flex align-center"
      v-for="melody in melodies"
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
        class="row__note row-active"
        :class="melody.status === 'active' ? 'visible' : 'hidden'"
        width="137"
        cover
        src="@/assets/imgs/note-active.png"
      >
        <div
          class="row__note_wrapper"
          :class="{ red: melody.status === 'active' }"
        >
          {{ melody.points }}
        </div>
      </v-img>
      <v-img
        class="row__note row-current"
        :class="[
          data.status === 'active' && melody.status !== 'active'
            ? 'visible'
            : 'hidden',
          melody.completed ? 'visible__completed' : '',
        ]"
        width="137"
        cover
        src="@/assets/imgs/note-current.png"
      >
        <div
          v-show="!melody.completed"
          class="row__note_wrapper"
          :class="{ current: data.status === 'active' }"
        >
          {{ melody.points }}
        </div>
      </v-img>
      <v-img
        class="row__note"
        :class="[
          data.status === 'default' && melody.status === 'default'
            ? 'visible'
            : 'hidden',
          melody.completed ? 'visible__completed' : '',
        ]"
        width="137"
        cover
        src="@/assets/imgs/note.png"
      >
        <div
          v-show="!data.completed"
          class="row__note_wrapper"
        >
          {{ melody.points }}
        </div>
      </v-img>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

const melodies = computed(() => props.data.melodies)
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
    font-size: 32px;
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

.completed {
  transition: opacity 0.4s ease;
  *:not(.row-active, .visible__completed, .row-current) {
    opacity: 0.6;
  }
}
</style>
