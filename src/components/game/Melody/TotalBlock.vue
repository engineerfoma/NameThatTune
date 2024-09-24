<template>
  <v-tooltip
    :text="data.name"
    location="bottom"
  >
    <template v-slot:activator="{ props }">
      <v-img
        class="total align-center"
        :src="path"
        v-bind="props"
        width="192"
        height="116"
      >
        <div class="d-flex flex-column">
          <span>
            {{ data.name }}
          </span>
          <span>
            {{ data.score }}
          </span>
        </div>
      </v-img>
    </template>
  </v-tooltip>
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
  color: white;
  span {
    font-size: 30px;
    line-height: 1.25;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
}
</style>
