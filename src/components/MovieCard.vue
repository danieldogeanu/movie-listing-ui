<template>
	<a href="#" class="moviecard">
		<div class="moviecard__wrap">
			<div class="moviecard__overlay">
				<div class="moviecard__inneroverlay">
					<ul class="moviecard__genres">
						<li class="moviecard__genre">Action</li>
						<li class="moviecard__genre">Science Fiction</li>
						<li class="moviecard__genre">Thriller</li>
						<li class="moviecard__genre">Adventure</li>
					</ul>
					<p class="moviecard__rating">8.5</p>
				</div>
			</div>
			<img class="moviecard__img" src="../assets/images/default.jpg" alt="">
		</div>
		<h2 class="moviecard__title">
			Movie Title
		</h2>
	</a>
</template>

<script>
export default {
	name: 'MovieCard',
}
</script>

<style scoped lang="scss">
@import '../styles/includes';

.moviecard {
	display: block;

	&__wrap {
		width: 100%;
		height: auto;
		position: relative;
		border-radius: rem(6);
		overflow: hidden;
		@include box-shadow(0, 0, rem(80), rem(1), color(black), 0.2);
	}

	&__overlay {
		display: block;
		opacity: 0;
		width: 100%;
		height: 100%;
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

	&__genres {
		list-style: none;
		margin-bottom: rem(40);
	}

	&__genre {
		margin-bottom: rem(15);
		font-family: font(open-sans);
		font-weight: weight(regular);
		font-size: rem(14);
		text-transform: uppercase;
		line-height: 1;
		color: color-scheme(moviecard, genres);
	}

	&__rating {
		font-family: font(open-sans);
		font-weight: weight(semi-bold);
		font-size: rem(38);
		text-transform: uppercase;
		line-height: 1;
		color: color-scheme(moviecard, rating);
	}

	&__img {
		position: relative;
		z-index: level(moviecard, img);
		width: 100%;
		height: auto;
		margin-bottom: rem(-6);
	}

	&__title {
		display: block;
		width: 100%;
		margin-top: rem(15);
		font-family: font(montserrat);
		font-weight: weight(semi-bold);
		font-size: rem(20);
		text-align: center;
		color: color-scheme(moviecard, title);
		transition: color .2s ease;
	}

	&:hover &__title {
		color: color-scheme(moviecard, title-hover);
	}

	&:hover &__overlay {
		opacity: 1;
	}
}
</style>
