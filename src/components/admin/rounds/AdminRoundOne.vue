<template>
  <div class="d-flex">
    <v-radio-group
      v-model="activeCategory.one"
      inline
    >
      <v-radio
        v-for="category in roundOne"
        :key="category.id"
        :value="category.id"
        :label="category.name"
        class="width"
        @change="onChangeCategory"
      >
      </v-radio>
      <template v-slot:label>
        <div>Активная категория</div>
      </template>
    </v-radio-group>
    <v-tooltip text="Отменить активную категорию">
      <template v-slot:activator="{ props }">
        <img
          @click="removeActiveCategory"
          v-bind="props"
          class="img-header"
          src="@/assets/icons/delete.svg"
          alt="delete"
        />
      </template>
    </v-tooltip>
  </div>
  <Selected
    class="w-100"
    v-for="row in roundOne"
    :key="row.id"
    :title="row.name"
  >
    <CategoryRow
      class="w-100"
      :row="row"
      @updateStateRow="handleUpdateState"
      @updateRow="handleUpdateRow"
      @clearRow="handlerClearRow"
      @cancelChangeRow="handleCancelChangeRow"
    />
    <SongList
      class="w-100"
      v-if="row.melodies.length"
      :currentCategory="row"
      activeRound="1"
      @updateRound="handleUpdateActiveSong"
    />
  </Selected>
</template>
<script setup>
import { onMounted } from 'vue'
import { category, melody } from '@/services/api.service'
import { useAppStore } from '@/stores/app'
import SongList from '../SongList.vue'
import { storeToRefs } from 'pinia'

const store = useAppStore()

const { activeCategory, roundOne } = storeToRefs(store)

const handleUpdateState = (data) => {
  data.disabled = false
}

const handleUpdateRow = async (data) => {
  data.disabled = true
  await category.edit(data.id, {
    name: data.name,
  })
  await getCategories()
}

const handlerClearRow = (data) => {
  data.name = ''
  data.disabled = false
}

const handleCancelChangeRow = async (data) => {
  data.disabled = true
  await getCategories()
}

const getCategories = async () => {
  try {
    await store.getRoundOne()
  } catch (e) {
    alert(`ошибка: ${e}`)
  }
}

const handleUpdateActiveSong = async () => {
  await getCategories()
}

const onChangeCategory = async (event) => {
  await category.activateStatus(event.target.value, 1)
  await getCategories()
}

const removeActiveCategory = async () => {
  await category.reset()
  await melody.reset()
  await getCategories()
}

onMounted(async () => {
  await handleUpdateActiveSong()
})
</script>

<style lang="scss" scoped>
.img-header {
  transition: opacity 0.3s ease;
  width: 25px;
  margin: 0 auto;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
}
</style>
