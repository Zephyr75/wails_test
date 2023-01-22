<script setup>

import { ref } from 'vue'
const count = ref(0)
function increment() {
    count.value++
}
function decrement() {
    count.value--
}

</script>

<template>
    <main>
        <div class="full">
            <div class="column">
                <div class="center row">
                    <div @click="decrement" class="button is-primary">decrement</div>
                    <p class="center"> {{ count }} </p>
                    <button @click="increment" class="button is-primary">increment</button>
                </div>

                <div class="height"></div>

                <div class="center row">
                    <div @click="decrement" class="button is-primary">decrement</div>
                    <p class="center"> {{ count }} </p>
                    <button @click="increment" class="button is-primary">increment</button>
                </div>

                <div class="height"></div>

                <div class="center row">
                    <div @click="decrement" class="button is-primary">decrement</div>
                    <p class="center"> {{ count }} </p>
                    <button @click="increment" class="button is-primary">increment</button>
                </div>


            </div>


        </div>
    </main>
</template>

<style>

</style>