<template>
  <div class="home">
    <MessageTemplate :messages="messages" />
    <InputMessage :id="test"/>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import InputMessage from '../components/InputMessage.vue'
import MessageTemplate from '@/components/MessageTemplate.vue'
import { collection, query, where, onSnapshot, addDoc, orderBy } from 'firebase/firestore'
import { db } from '@/firebase/index.js'

const name = ref('Home')
const messages = ref({})
const test = ref(Object.keys(messages.value).length)
onMounted(() => {
  const q = query(collection(db, 'chat'), orderBy('date'))
  onSnapshot(q, (querySnapshot) => {
    let id = 0
    querySnapshot.forEach((doc) => {
      messages.value[id] = Object.assign(doc.data())
      id++
    })
  })
})

</script>
<style lang="scss">

</style>
