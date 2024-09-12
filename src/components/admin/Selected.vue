<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-title>
        <template v-slot:default="{ expanded }">
          <v-row no-gutters>
            <v-col
              class="d-flex justify-start"
              cols="4"
            >
              {{title}}
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <slot />
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup>
defineProps({
  title: String
})
</script>

<style lang="scss" scoped></style>
