<script setup>

// u('li.node').on('click', function(){
//     u(this).children('ul').toggleClass("is-hidden")
// })

</script>

<template>
    <main>
        <ul class="menu-list">
            <li class="node"><a>Actions</a>
                <ul>
                    <li><a>Add</a></li>
                    <li><a>Delete</a></li>
                    <li><a>Edit</a></li>
                    <li>
                        <ul class="menu-list">
                            <li class="node"><a>Actions</a>
                                <ul>
                                    <li><a>Add</a></li>
                                    <li><a>Delete</a></li>
                                    <li><a>Edit</a></li>
                                    <li>


                                    </li>
                                </ul>
                            </li>
                        </ul>

                    </li>
                </ul>
            </li>
        </ul>
        <ul class="menu-list">
            <li class="node"><a>Actions</a>
                <ul class="is-hidden">
                    <li><a>Add</a></li>
                    <li><a>Delete</a></li>
                    <li><a>Edit</a></li>
                </ul>
            </li>
        </ul>
        <ul class="menu-list">
            <li class="node"><a>Actions</a>
                <ul class="is-hidden">
                    <li><a>Add</a></li>
                    <li><a>Delete</a></li>
                    <li><a>Edit</a></li>
                </ul>
            </li>
        </ul>
    </main>
</template>


<style>

</style>