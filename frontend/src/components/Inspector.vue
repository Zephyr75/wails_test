<script setup>

import Dropdown from './Dropdown.vue';
import Expandable from './Expandable.vue';
import Test from './Test.vue';

</script>

<template>
    <main>
        <aside class="menu">
            <p class="menu-label" style="color: #fff;">
                Inspector
            </p>
            <ul class="menu-list">
                <li><a>Dashboard</a></li>
                <li><a>Customers</a></li>
                <li><a>Team Settings</a></li>
                <li><Expandable/></li>
                <li>
                    <button class="button full">+</button>
                </li>
            </ul>
        </aside>
    </main>
</template>

<style>

</style>