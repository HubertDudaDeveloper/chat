<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/signin">signIn</router-link> |
    <router-link to="/registerview">Register</router-link>
  </nav>
  <main class="main">
    <router-view/>
  </main>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'

const name = ref('InputMessage')

</script>
<style lang="scss">
* {
  box-sizing: border-box;
}

.main {
  height: 90vh;
}
</style>
