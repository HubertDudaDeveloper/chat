<template>
  <div class="message">
 <input v-model="messagea"> <button @click="sendData()">Wyślij</button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineProps } from 'vue'
import { db, collection, addDoc } from '@/firebase'

const name = ref('InputMessage')
const messagea = ref('')

const sendData = () => {
  addDoc(collection(db, 'chat'), {
    message: messagea,
    userId: ''
  })
}
</script>

<style scoped lang="scss">

</style>
