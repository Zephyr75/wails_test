<script setup>

import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import Dah from './Dah.vue';
import Inspector from './Inspector.vue';
import Viewport from './Viewport.vue';
import Assets from './Assets.vue';
import Hierarchy from './Hierarchy.vue';

</script>

<template>
    <main>
        <splitpanes style="height: 100vh">
            <pane>
                <splitpanes horizontal>
                    <pane class="background">
                        <splitpanes style="height: 100vh">
                            <pane class="background">
                                <Hierarchy/>
                            </pane>
                            <pane class="background">
                                <Viewport/>
                            </pane>
                        </splitpanes>
                    </pane>
                    <pane>
                        <Assets/>
                    </pane>
                </splitpanes>
            </pane>
            <pane>
                <Inspector class="full"/>
            </pane>
        </splitpanes>


    </main>
</template>

<style>
.splitpanes {
    background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
}

.pane {
    font-size: 1rem;
}


.splitpanes__splitter {
    background-color: #ccc;
    position: relative;
}
</style>