<template>
	<div class="moviesgrid">
		<movie-card 
			v-for="movie in compMovies" :key="movie.id" 
			:movie="movie" :config="compConfig" 
			:detail="getMovieDetail(movie.id)" />
	</div>
</template>

<script>
import MovieCard from './MovieCard.vue';

export default {
	name: 'MoviesGrid',
	components: {
		'movie-card': MovieCard,
	},
	props: {
		movies: Array,
		config: Object,
		details: Array,
	},
	computed: {
		compMovies() {
			return this.getMovies();
		},
		compConfig() {
			return this.getConfig();
		},
	},
	methods: {
		
		// Get the movie details and return a single movie object, matching the movie id.
		// We're fairly sure we're going to be left with a single object in the array so we pop it out.
		getMovieDetail(id) {
			return this.details.filter(movie => movie.id === id).pop();
		},

		// Get the movies array or return an empty array.
		getMovies() {
			return this.movies || [];
		},

		// Get the config object or return an empty object.
		getConfig() {
			return this.config || {};
		},

	},
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
