<template>
  <div class="message">
 <input class="message__item input" v-model="messagea"> <button class="message__item button" @click="sendData(date(), time)">Wyślij</button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineProps } from 'vue'
import { getAuth } from 'firebase/auth'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '@/firebase'

const time = new Date()
const name = ref('InputMessage')
const messagea = ref('')
const chatID = ref('')

const date = () => {
  const time = new Date()
  const day = String(time.getDate()).padStart(2, '0')
  const month = String(time.getMonth() + 1).padStart(2, '0')
  const year = time.getFullYear()
  const hour = String(time.getHours()).padStart(2, '0') + ':' + String(time.getMinutes()).padStart(2, '0') + ':' + String(time.getSeconds()).padStart(2, '0')
  const now = day + '-' + month + '-' + year + ' ' + hour
  return now
}

const sendData = (now, getTime) => {
  addDoc(collection(db, 'chat'), {
    message: messagea.value,
    userId: getAuth().currentUser.email,
    nickName: getAuth().currentUser.displayName,
    chatID: '',
    date: now,
    time: getTime
  })
}
</script>

<style scoped lang="scss">
.message {
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  border-radius: 25px;
  box-shadow: 5px 0px 10px grey;
  background-color: white;
  bottom: 0px;
  &__item.input{
    width: 90%;
    padding: 15px;
    font-size: 1em;
    &:focus{
      outline: none;
    }
  }
  &__item.button{
    width: 10%;
    background-color: rgb(28, 118, 148);
    border-radius: 25px;
    width: 125px;
    color: white;
    font-weight: bolder;
  }
  &__item {
    border: none;
  }
}
</style>
