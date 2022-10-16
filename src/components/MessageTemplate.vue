<template>
    <section class="messages">
        <div class="messages__item" :class="{ 'not-me': notme(item) }" v-for="(item, index) in props.messages" :key="index">
            {{index}}
            <p>{{item.message}}</p>
            <p>{{item.date}}</p>
            <p>{{item.userId}}</p>
        </div>
    </section>
</template>
<script setup lang="ts">
import { ref, defineProps, reactive } from 'vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const name = 'MessageTemplate'
const props = defineProps({
  messages: Array
})
const notme = (item) => {
  return getAuth().currentUser.email !== item.userId
}

console.log(props.messages)
</script>
<style scoped lang="scss">
.not-me {
    align-self: flex-start !important;
}
.messages {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-items: end;
    overflow-y: auto;
    &__item {
        align-self: flex-end;
        width: 50%;
        background-color: rgb(0, 0, 0);
        color: white;
        margin: 5px;
        display: grid;
        padding: 10px;
    }
}
</style>
