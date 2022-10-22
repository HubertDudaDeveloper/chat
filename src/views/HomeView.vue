<template>
  <div class="home">
    <button @click="handleSignOut()" style="position:fixed;" v-if="isLoggedIn">Wyloguj się</button>
    <MessageTemplate :messages="messages" />
    <InputMessage :id="test"/>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import InputMessage from '../components/InputMessage.vue'
import MessageTemplate from '@/components/MessageTemplate.vue'
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { db } from '@/firebase/index.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const name = ref('Home')
const messages = ref({})
const test = ref(Object.keys(messages.value).length)
const isLoggedIn = ref(false)

let auth
onMounted(() => {
  auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
    } else {
      isLoggedIn.value = false
      router.push('/signin')
    }
  })
  const q = query(collection(db, 'chat'), orderBy('date'))
  onSnapshot(q, (querySnapshot) => {
    let id = 0
    querySnapshot.forEach((doc) => {
      messages.value[id] = Object.assign(doc.data())
      id++
    })
  })
})

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push('/signin')
  })
}

</script>
<style lang="scss">
.home {
  background-color:  rgb(28, 118, 148);
}
</style>
