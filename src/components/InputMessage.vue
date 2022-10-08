<template>
  <div class="message">
 <input v-model="messagea"> <button @click="sendData(date(), time)">Wyślij</button>
  {{ messagea }}
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineProps } from 'vue'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '@/firebase'

const name = ref('InputMessage')
const messagea = ref('')
const user = ref('ME')
const date = () => {
  const time = new Date()
  const day = String(time.getDay()).padStart(2, '0')
  const month = String(time.getMonth() + 1).padStart(2, '0')
  const year = time.getFullYear()
  const hour = String(time.getHours()).padStart(2, '0') + ':' + String(time.getMinutes()).padStart(2, '0') + ':' + String(time.getSeconds()).padStart(2, '0')
  const now = day + '-' + month + '-' + year + ' ' + hour
  return now
}
const time = new Date()

const sendData = (now, getTime) => {
  addDoc(collection(db, 'chat'), {
    message: messagea.value,
    userId: user.value,
    date: now,
    time: getTime
  })
}
</script>

<style scoped lang="scss">

</style>
