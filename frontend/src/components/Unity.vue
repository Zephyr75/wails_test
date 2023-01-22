<script setup>

import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import Dah from './Dah.vue';

</script>

<template>
    <main>
        <splitpanes style="height: 100vw" :splitterSize="100">
            <pane min-size="20" class="background">1</pane>
            <pane>
                <splitpanes horizontal>
                    <pane class="background">
                        <Dah />
                    </pane>
                    <pane class="background">3</pane>
                    <pane class="background">4</pane>
                </splitpanes>
            </pane>
            <pane class="background">5</pane>
        </splitpanes>


    </main>
</template>

<style>
.splitpanes {
    background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
}

.splitpanes__splitter {
    background-color: #ccc;
    position: relative;
}
</style>