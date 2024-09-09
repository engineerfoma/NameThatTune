<template>
  <v-fade-transition>
    <v-img
      class="preview"
      v-show="expand"
      aspect-ratio="16/9"
      cover
      src="@/assets/imgs/preview-round-1.png"
    ></v-img>
  </v-fade-transition>
</template>
<script setup>
defineProps({
  expand: {
    type: Boolean,
    default: true,
  },
})
</script>

<style lnag="scss" scoped>
.preview {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
