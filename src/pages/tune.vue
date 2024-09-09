<template>
  <DefaultLayout>
    <v-container
      class="fill-height d-flex flex-column align-center justify-space-between w-100"
    >
      <Tabs />
      <v-btn
        target="_blank"
        to="/round-one"
        append-icon="mdi-check-circle"
        >Запустить игру</v-btn
      >
    </v-container>
  </DefaultLayout>
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Tabs from '../components/admin/Tabs'
</script>
