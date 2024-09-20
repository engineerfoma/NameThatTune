<template>
  <v-card>
    <v-layout class="flex-column">
      <v-app-bar
        color="primary"
        v-click-outside="() => onClickOutside"
      >
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        />
        <div class="d-flex justify-space-between w-100 align-center">
          <v-toolbar-title>Административная панель</v-toolbar-title>
          <img
            class="pe-8"
            height="50"
            width="120"
            src="@/assets/icons/logo.svg"
          />
        </div>

        <v-spacer />
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        temporary
      >
        <v-list>
          <v-list-item
            link
            :to="item.link"
            v-for="item in items"
            :key="item.value"
          >
            {{ item.title }}
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main class="main">
        <slot />
      </v-main>
    </v-layout>
  </v-card>
</template>
<script setup>
import { ref, watch } from 'vue'

const drawer = ref(false)
const group = ref(null)
const items = [
  {
    title: 'Угадай мелодию',
    value: 'guess-melody',
    link: 'guess-melody',
  },
  {
    title: 'Квиз',
    value: 'quiz',
    link: 'quiz',
  },
]

watch(group, () => {
  this.drawer = false
})
</script>

<style lang="scss">
.main {
  height: 100dvh;
  overflow-y: scroll;
}
</style>
