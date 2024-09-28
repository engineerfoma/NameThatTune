<template>
  <DefaultLayout>
    <v-container
      class="tune d-flex flex-column align-center w-100 justify-space-between"
      color
    >
      <div class="tune d-flex flex-column align-center w-100">
        <Selected
          title="Команды"
          class="color"
        >
          <Teams />
        </Selected>
      </div>
    </v-container>
  </DefaultLayout>
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Teams from '@/components/Admin/Teams'
</script>
