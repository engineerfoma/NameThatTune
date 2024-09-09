<template>
  <header class="header d-flex" :class="{header__three: three}">
    <img
      width="211"
      cover
      src="@/assets/icons/logo.svg"
    />
    <div class="header__container w-100 d-flex ">
      <div v-for="team in teams">
        <TotalBlock :data="team" />
      </div>
    </div>
  </header>
</template>

<script setup>
import TotalBlock from './TotalBlock.vue'

defineProps({
  three: Boolean
})

const teams = ref([
  {
    color: 'red',
    value: '123',
  },
  {
    color: 'blue',
    value: '2124',
  },
  {
    color: 'green',
    value: '2124',
  },
  {
    color: 'ocean',
    value: '122',
  },
  {
    color: 'purple',
    value: '4444',
  },
  {
    color: 'orange',
    value: '433',
  },

])
</script>

<style lang="scss" scoped>
.header {
  margin: 45px 100px 44px 57px;
  height: 116px;
  gap: 140px;
  &__container {
    gap: 47px;
    overflow: scroll;
  }

  &__three {
    margin-bottom: 35px;
  }
}
</style>
