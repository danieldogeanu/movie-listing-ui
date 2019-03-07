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
	grid-template: auto / repeat(4, 1fr);
	gap: rem(60) rem(30);
}
</style>
