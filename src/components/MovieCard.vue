<template>
	<a href="#" class="moviecard" @click.prevent>
		<div class="moviecard__wrap">
			<div class="moviecard__overlay">
				<div class="moviecard__inneroverlay">
					<genres v-if="genres" :genres="genres" />
					<p class="moviecard__rating">{{rating}}</p>
				</div>
			</div>
			<poster-image v-if="posterData" :posterData="posterData" />
		</div>
		<h2 class="moviecard__title">{{title}}</h2>
	</a>
</template>

<script>
import PosterImage from './PosterImage.vue';
import Genres from './Genres.vue';

export default {
	name: 'MovieCard',
	components: {
		'poster-image': PosterImage,
		'genres': Genres,
	},
	props: {
		movie: Object,
		config: Object,
		detail: Object,
	},
	computed: {
		posterData() {
			return this.getPosterData() || {};
		},
		rating() {
			return this.getRating() || 0;
		},
		genres() {
			return this.getGenres() || [];
		},
		title() {
			return this.getTitle() || '';
		}
	},
	methods: {

		// Compose the data object to pass to the PosterImage component.
		getPosterData() {
			return {
				baseUrl: this.config.images.secure_base_url,
				posterSizes: this.config.images.poster_sizes,
				imgPath: this.movie.poster_path,
				altText: this.movie.title + ' Poster Image',
			};
		},

		getRating() {
			if (this.movie) return this.movie.vote_average;
		},

		getGenres() {
			if (this.detail) return this.detail.genres;
		},

		getTitle() {
			if (this.movie) return this.movie.title;
		}

	},
}
</script>

<style scoped lang="scss">
@import '../styles/includes';

%block {
	display: block;
	width: 100%;
	&--auto {
		@extend %block;
		height: auto;
	}
	&--full {
		@extend %block;
		height: 100%;
	}
}

%border-radius {
	border-radius: rem(6);
}

.moviecard {
	@extend %block;

	&__wrap {
		@extend %block--auto;
		@extend %border-radius;
		position: relative;
		overflow: hidden;
		@include box-shadow(0, 0, rem(80), rem(1), color(black), 0.2);
	}

	&__overlay {
		@extend %block--full;
		@extend %border-radius;
		opacity: 0;
		position: absolute;
		top: 0; left: 0;
		z-index: level(moviecard, overlay);
		@include linear-gradient(top, rgba(black, 0.2), 0%, rgba(black, 0.9), 70%);
		transition: opacity .2s ease;
	}

	&__inneroverlay {
		position: absolute;
		left: 0; bottom: 0;
		padding: rem(25);
	}

	&__rating {
		font-family: font(open-sans);
		font-weight: weight(semi-bold);
		font-size: rem(38);
		line-height: 1;
		text-transform: uppercase;
		color: color-scheme(moviecard, rating);
	}

	&__title {
		@extend %block;
		margin-top: rem(15);
		text-align: center;
		font-size: rem(18);
		font-family: font(montserrat);
		font-weight: weight(semi-bold);
		color: color-scheme(moviecard, title);
		transition: color .2s ease;
	}

	&:hover &__title {
		color: color-scheme(moviecard, title-hover);
	}

	&:hover &__overlay {
		opacity: 1;
	}

	.no-cssgrid & {
		display: table-cell;
		vertical-align: top;
		float: left;
		width: 100%;
		padding: 0 0 rem(30) 0;
		@include breakpoint(min, rem(421)) {
			padding: 0 rem(10) rem(40) rem(10);
			width: 50%;
		}
		@include breakpoint(min, rem(641)) {
			padding: 0 rem(12.5) rem(50) rem(12.5);
			width: 33.33333333333333%;
		}
		@include breakpoint(min, rem(861)) {
			padding: 0 rem(15) rem(60) rem(15);
			width: 25%;
		}
	}
}
</style>
