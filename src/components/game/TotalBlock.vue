<template>
  <v-img
    class="total align-center"
    :src="path"
    width="192"
    height="116"
  >
    {{ data.value }}
  </v-img>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})
const path = computed(() => {
  return '/src/assets/icons/' + props.data.color + '.png'
})
</script>

<style lang="scss" scoped>
.total {
  font-size: 64px;
  line-height: 64px;
  font-weight: 700;
  text-align: center;
  color: white
}
</style>
