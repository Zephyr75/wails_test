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
        
        <div class="center full">
            <!-- <div class="columns"> -->
                <div>
                    <button @click="decrement" class="button is-primary">decrement</button>
                </div>
                <div class="center width">
                    <p>
                        {{count}}
                    </p>
                </div>
                <div>
                    <button @click="increment" class="button is-primary">increment</button>
                </div>
            <!-- </div> -->
        </div>
        <!-- <div class="quarter red absolute">
            <div class="test half blue">
                
            </div>
        </div> -->
    </main>
</template>

<style>

</style>