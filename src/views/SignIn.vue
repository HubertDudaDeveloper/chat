<template>
  <section class="signin">
    <h1 class="signin__h1">Zaloguj się</h1>
    <label class="signin__label" for="email">Email</label>
    <input v-model="email" class="signin__input" type="email" placeholder="Wprowadź email" id="email">
    <label class="signin__label" for="password">Hasło</label>
    <input v-model="password" class="signin__input" type="password" placeholder="Hasło" id="password">
    <button class="signin__button" @click="signIn">Wyślij</button>
    <button class="signin__button" @click="router.push('/registerview')">Zarejestruj się</button>
</section>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')

const router = useRouter()

const signIn = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      router.push('/')
    })
    .catch((error) => {
      console.log(error.code)
      console.log(error.message)
    })
}

</script>
<style lang="scss">
.signin {
  display: flex;
  flex-direction: column;
  gap: 5px;
  &__h1,
  &__label,
  &__button,
  &__input {
    padding: 10px;
    margin: 5px;
    border-radius: 25px;
  }
  &__h1 {
    font-size: 2.5em;
  }
  &__label  {

  }
  &__input  {

  }
  &__button{

  }
}
</style>
