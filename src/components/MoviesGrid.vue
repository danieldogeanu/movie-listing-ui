<template>
	<div class="moviesgrid">
		<movie-card 
			v-for="movie in movies" :key="movie.id" 
			:movie="movie" :config="config" 
			:detail="getMovieDetail(movie.id)" />
	</div>
</template>

<script>
import MovieCard from './MovieCard.vue';

export default {
	name: 'MoviesGrid',
	props: {
		movies: Array,
		config: Object,
		details: Array,
	},
	components: {
		'movie-card': MovieCard,
	},
	methods: {
		// Get the movie details and return a single movie object, matching the movie id.
		// We're fairly sure we're going to be left with a single object in the array so we pop it out.
		getMovieDetail(id) {
			return this.details.filter(movie => movie.id === id).pop();
		}
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

	.no-cssgrid & {
		display: table;
		width: 100%;
		grid-template: none;
		gap: 0;
	}
}
</style>
