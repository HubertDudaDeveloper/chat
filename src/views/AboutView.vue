<template>
  <section class="register">
    <h1 class="register__h1">Rejestracje</h1>
    <label class="register__label" for="email">Email</label>
    <input v-model="email" class="register__input" type="email" placeholder="Wprowadź email" id="email">
    <label class="register__label" for="password">Hasło</label>
    <input v-model="password" class="register__input" type="password" placeholder="Hasło" id="password">
    <button class="register__button" @click="register">Wyślij</button>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')

const router = useRouter()

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log('We Made It!' + data)
      router.push('/')
    })
    .catch((error) => {
      console.log(error.code)
      console.log(error.message)
    })
}

</script>
<style lang="scss">
.register {
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
