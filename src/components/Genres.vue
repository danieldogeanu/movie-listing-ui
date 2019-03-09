<template>
	<ul class="moviecard__genres">
		<li class="moviecard__genre" 
			v-for="genre in genres"
			:key="genre.id"
		>{{genre.name}}</li>
	</ul>
</template>

<script>
export default {
	name: 'Genres',
	props: {
		genres: Array,
	},
}
</script>

<style scoped lang="scss">
@import '../styles/includes';

.moviecard {
	&__genres {
		list-style: none;
		margin-bottom: rem(40);
	}

	&__genre {
		margin-bottom: rem(15);
		font-family: font(open-sans);
		font-weight: weight(regular);
		font-size: rem(14);
		line-height: 1;
		text-transform: uppercase;
		color: color-scheme(moviecard, genres);
	}
}
</style>
