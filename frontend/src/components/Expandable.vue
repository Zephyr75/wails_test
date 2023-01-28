
<script setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

document.addEventListener('DOMContentLoaded', function() {
	let cardToggles = document.getElementsByClassName('card-toggle');
	for (let i = 0; i < cardToggles.length; i++) {
		cardToggles[i].addEventListener('click', e => {
			console.log(3);
			e.currentTarget.parentElement.parentElement.childNodes[1].classList.toggle('is-hidden');
			e.currentTarget.childNodes[0].classList.toggle('is-hidden');
			e.currentTarget.childNodes[1].classList.toggle('is-hidden');



		});
	}
});

</script>

<template>

    <main>
        <div class="container wid">
		<div class="card is-fullwidth">
			<header class="card-header">
				<a class="card-header-icon card-toggle">
					<font-awesome-icon icon="fa-solid fa-caret-down" size="2x"/>
					<font-awesome-icon icon="fa-solid fa-caret-up" size="2x" class="is-hidden"/>
				</a>
				<p class="card-header-title">Rigidbody</p>
			</header>
			<div class="card-content is-hidden">
				<div class="content">
					Content goes here <small>Small text</small>
				</div>
			</div>
		</div>

		<div class="card is-fullwidth">
			<header class="card-header">
				<a class="card-header-icon card-toggle">
					<font-awesome-icon icon="fa-solid fa-caret-down" size="2x"/>
					<font-awesome-icon icon="fa-solid fa-caret-up" size="2x" class="is-hidden"/>
				</a>
				<p class="card-header-title">Collider</p>
			</header>
			<div class="card-content is-hidden">
				<div class="content">
					Some more content. Look at all this whitespace. <small>(Unless you are on mobile)</small>
				</div>
			</div>
		</div>
	</div>

    </main>


</template>

<style>

.big {
    
}

.wid {

    width: 90%;
}

</style>