<template>
  <v-file-input
    type="file"
    :key="modelValue"
    @change="onFileChange"
    accept="audio/*"
    :label="modelValue || 'Добавьте мелодию'"
    variant="outlined"
  />
</template>

<script setup>
const emits = defineEmits(['update:modelValue'])
import { melody } from '../../services/api.service'
const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },
  id: {
    type: Number,
    default: null,
  },
  song: {
    type: Boolean,
    defaul: false,
  },
})

const changeAudioHandler = async (data) => {
  return await melody.edit(data)
}

const onFileChange = async (event) => {
  const fileName = event.target.files[0].name
  try {
    if (props.song) {
      await changeAudioHandler({
        id: props.id,
        songPath: fileName,
        name: fileName,
      })
      emits('update:modelValue', fileName)
      return
    }
    await changeAudioHandler({
      id: props.id,
      melodyPath: fileName,
      name: fileName,
    })
    emits('update:modelValue', fileName)
  } catch (e) {
    alert(`ошибка: ${e}`)
  }
}
</script>

<style lang="scss" scoped></style>
