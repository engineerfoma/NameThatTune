<template>
 filePath.value = {{ filePath }}
  <v-file-input
    type="file"
    @change="handleFileUpload"
    accept="audio/*"
    label="Добавьте мелодию"
  ></v-file-input>
  <button @click="uploadFile">Загрузить файл</button>
</template>

<script setup>
import { category } from '../../services/api.service'
const serverPath =  'valerijj-meladze-ja-ne-mogu-bez-tebja.mp3'
const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },
})
const selectedFile = ref(null)
const filePath = ref('')

const handleFileUpload = (event) => {
  selectedFile.value = event.target.files[0]
  filePath.value = selectedFile.value.name
}

const uploadFile = async () => {
  const formData = new FormData()
  formData.append('file', selectedFile.value)
  console.log(formData)
  try {
    const response = await category.addMelodyInCategory(
      {
        categoryId: 1,
        melodyId: 1,
      },
      formData
    )
    console.log(response);
    
    // axios.post('URL_ВАШЕГО_СЕРВЕРА', formData);

    // filePath.value = response.data.filePath // Предполагается, что сервер возвращает путь к файлу
  } catch (error) {
    console.error('Ошибка при загрузке файла:', error)
  }
}

const downloadFile = async () => {
  if (filePath.value) {
    const response = await axios.get(filePath.value, { responseType: 'blob' })
    const url = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'имя_файла') // Укажите имя файла
    document.body.appendChild(link)
    link.click()
  }
}

const emit = defineEmits(['update:modelValue'])

const onFileChange = (event) => {
  const file = event.target.files[0]
  emit('update:modelValue', file)
}
</script>

<style lang="scss" scoped></style>
