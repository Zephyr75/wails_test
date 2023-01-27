
<script setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

document.addEventListener('DOMContentLoaded', function() {
	let cardToggles = document.getElementsByClassName('card-toggle');
	for (let i = 0; i < cardToggles.length; i++) {
		cardToggles[i].addEventListener('click', e => {
			e.currentTarget.parentElement.parentElement.childNodes[3].classList.toggle('is-hidden');
		});
	}
});

</script>

<template>

    <main>
        <div class="container wid">
            <div class="card">
                <header class="card-header">
                    <a class="card-header-icon card-toggle">
                        <font-awesome-icon icon="fa-solid fa-user-secret" />
                    </a>
                    <p class="card-header-title">Card #1</p>
                </header>
                <div class="card-content is-hidden">
                    <div class="content">
                        Content goes here <small>Small text</small>
                    </div>
                </div>
            </div>
        </div>
    </main>


</template>

<style>

.wid {

    width: 50%;
}

</style>