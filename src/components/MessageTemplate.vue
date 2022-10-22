<template>
    <section class="messages" id="messages">
        <div class="messages__item" :class="{ 'not-me': notme(item) }" v-for="(item, index) in props.messages" :key="index">
            <span class="messages__item__message">{{item.message}}</span>
            <small class="messages__item__date">{{item.date}}</small>
            <small class="messages__item__Name">{{item.nickName}}</small>
        </div>
    </section>
</template>
<script setup lang="ts">
import { ref, defineProps, reactive, onMounted, onRenderTriggered, onUpdated } from 'vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const name = 'MessageTemplate'
const props = defineProps({
  messages: Array
})
const notme = (item) => {
  return getAuth().currentUser.email !== item.userId
}

onUpdated(() => {
  const messages = document.getElementById('messages')
  messages.scrollTop = messages.scrollHeight
})

</script>
<style scoped lang="scss">
.not-me {
    align-self: flex-start !important;
}
.messages {
    height: 87vh;
    display: flex;
    flex-direction: column;
    justify-items: end;
    overflow-y: auto;
    background-color:  white;

    &__item {
        max-width: 80vw;
        padding: 20px 40px;
        align-self: flex-end;
        background-color: rgb(28, 118, 148);
        color: white;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin: 5px;
        display: grid;
        border-radius: 25px;
        &__message {
            font-weight: bolder;
        }
        &__item{
            font-weight: italic;
        }
        &__item{
            font-weight: italic;
        }
    }

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
}

</style>
