<template>
  <nav class="nav none">
    <router-link class="nav__item" to="/" @click="menu()">Home</router-link>
    <router-link class="nav__item" to="/signin" @click="menu()">signIn</router-link>
    <router-link class="nav__item" to="/registerview" @click="menu()">Register</router-link>
  </nav>
  <nav class="nav-button">
  <button class="nav-button__item" @click="menu()">
    <p class="nav-button__item-icon none">x</p>
    <p class="nav-button__item-icon burger">_</p>
    <p class="nav-button__item-icon burger">_</p>
    <p class="nav-button__item-icon burger">_</p>
  </button>
  </nav>
  <main class="main">
    <router-view/>
  </main>
</template>
<script setup lang="ts">
import { doc } from '@firebase/firestore'
import { ref, reactive, onMounted } from 'vue'

const name = ref('InputMessage')

const menu = () => {
  const body = document.querySelector('.nav')
  const button = document.querySelectorAll('.nav-button__item-icon')
  body.classList.toggle('none')
  button.forEach(item => {
    item.classList.toggle('none')
  })
}

</script>
<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
}

.main {
  height: 90vh;
}

.none {
  display: none !important;
}

.nav {
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgb(28, 118, 148);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  z-index: 2;

  &__item {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 2.5em;
    text-decoration: none;
    text-transform: capitalize;
    color: white;
  }
}

.nav-button {
  height: 7.5vh;
  display: flex;
  justify-content: flex-end;
  padding: 0px 25px;
  background-color: rgb(28, 118, 148);
  &__item {
    all: unset;
    cursor: pointer;
    z-index: 2;
    color: white;
    position: fixed;
    font-size: 3em;
    font-weight: bold;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    .burger {
      line-height: 10px;
    }
  }
}
</style>
