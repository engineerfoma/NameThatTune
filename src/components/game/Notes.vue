<template>
  <div>
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
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Array,
    default: null,
  },
})
</script>

<style lang="scss" scoped></style>
