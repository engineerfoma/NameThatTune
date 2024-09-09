<template>
  <v-fade-transition>
    <v-img
      v-if="round === '1'"
      class="preview"
      v-show="expand"
      aspect-ratio="16/9"
      cover
      src="@/assets/imgs/preview-round-1.png"
    />
    <v-img
      v-else-if="round === '2'"
      class="preview"
      v-show="expand"
      aspect-ratio="16/9"
      cover
      src="@/assets/imgs/preview-round-2.png"
    />
    <v-img
      v-else-if="round === '3'"
      class="preview"
      v-show="expand"
      aspect-ratio="16/9"
      cover
      src="@/assets/imgs/preview-round-3.png"
    />
    <v-img
      v-else
      class="preview"
      v-show="expand"
      aspect-ratio="16/9"
      cover
      src="@/assets/imgs/preview-final.png"
    />
  </v-fade-transition>
</template>
<script setup>
defineProps({
  expand: {
    type: Boolean,
    default: true,
  },
  round: {
    type: String,
    default: '1',
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
