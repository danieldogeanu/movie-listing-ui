<template>
	<div class="moviesgrid">
		<movie-card v-for="(item, index) in 12" :key="index" />
	</div>
</template>

<script>
import MovieCard from './MovieCard.vue';

export default {
	name: 'MoviesGrid',
	components: {
		'movie-card': MovieCard,
	}
}
</script>

<style scoped lang="scss">
@import '../styles/includes';

.moviesgrid {
	display: grid;
	grid-template: auto / 1;
	gap: rem(30) 0;
	@include breakpoint(min, rem(421)) {
		grid-template: auto / repeat(2, 1fr);
		gap: rem(40) rem(20);
	}
	@include breakpoint(min, rem(641)) {
		grid-template: auto / repeat(3, 1fr);
		gap: rem(50) rem(25);
	}
	@include breakpoint(min, rem(861)) {
		grid-template: auto / repeat(4, 1fr);
		gap: rem(60) rem(30);
	}
}
</style>
