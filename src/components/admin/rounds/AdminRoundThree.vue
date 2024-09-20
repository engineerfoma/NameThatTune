<template>
  <div class="d-flex">
    <v-radio-group
      v-model="activeCategory.one"
      inline
    >
      <v-radio
        v-for="category in rows"
        :key="category.id"
        :value="category.id"
        :label="String(category.id)"
        class="width"
        @change="onChangeCategory"
      >
      </v-radio>
      <template v-slot:label>
        <div>Активная песня</div>
      </template>
    </v-radio-group>
    <v-tooltip text="Отменить активную песню">
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
    v-for="row in rows"
    :key="row.id"
    :title="'песня ' + row.id"
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
      :songs="row.melodies"
      @updateRound="handleUpdateActiveSong"
    />
  </Selected>
</template>
<script setup>
import SongList from '../SongList.vue'
import { storeToRefs } from 'pinia'
import { category } from '@/services/api.service'
import { useAppStore } from '@/stores/app'

const rows = ref([])

const store = useAppStore()

const { activeCategory } = storeToRefs(store)

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
    const data = await store.getRoundThree()
    rows.value = data
  } catch (e) {
    alert(`ошибка: ${e}`)
  }
}

const handleUpdateActiveSong = async () => {
  await getCategories()
}

const onChangeCategory = async (event) => {
  await category.activateStatus(event.target.value, 3)
  store.changeActiveCategory({
    id: 'three',
    value: event.target.value,
  })
  await getCategories()
}

const removeActiveCategory = async () => {
  if (activeCategory.value.three) {
    const currentCategory = rows.value.find(
      (category) => category.id === activeCategory.value.three
    )
    store.clearActiveCategory('three')
    await category.edit(currentCategory.id, {
      status: 'default',
    })
    await getCategories()
  }
}

onMounted(async () => {
  await getCategories()
})
</script>

<style lang="scss">
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
