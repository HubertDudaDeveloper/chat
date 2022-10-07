<template>
  <div class="home">
    <InputMessage />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import InputMessage from '../components/InputMessage.vue'
import { collection, query, where, onSnapshot, addDoc } from 'firebase/firestore'
import { db } from '@/firebase/index.js'

const name = ref('Home')

onMounted(() => {
  onSnapshot(collection(db, 'chat'), (querySnapshot) => {
    const messages = []
    querySnapshot.forEach((doc) => {
      messages.push(doc.data().message)
    })
    console.log('Current cities in CA: ', messages.join(', '))
  })
})

</script>
