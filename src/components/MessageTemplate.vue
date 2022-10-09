<template>
    <section class="messages">
        <div class="messages__item" v-for="(item, index) in props.messages" :key="index">
            {{index}}
            <p>{{item.message}}</p>
            <p>{{item.date}}</p>
            <p>{{item.userId}}</p>
        </div>
    </section>
</template>
<script setup lang="ts">
import { ref, defineProps, reactive } from 'vue'

const name = 'MessageTemplate'
const props = defineProps({
  messages: Array
})

console.log(props.messages)
</script>
<style scoped lang="scss">
.messages {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-items: end;
    align-items: flex-end;
    overflow-y: auto;
    &__item {
        width: 50%;
        background-color: rgb(0, 0, 0);
        color: white;
        margin: 5px;
        display: grid;
        padding: 10px;
    }
}
</style>
