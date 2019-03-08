<template>
	<a href="#" class="moviecard" @click.prevent="">
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

%inneroverlay-text {
	font-family: font(open-sans);
	text-transform: uppercase;
	line-height: 1;
}

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

	&__genres {
		list-style: none;
		margin-bottom: rem(40);
	}

	&__genre {
		@extend %inneroverlay-text;
		margin-bottom: rem(15);
		font-weight: weight(regular);
		font-size: rem(14);
		color: color-scheme(moviecard, genres);
	}

	&__rating {
		@extend %inneroverlay-text;
		font-weight: weight(semi-bold);
		font-size: rem(38);
		color: color-scheme(moviecard, rating);
	}

	&__img {
		@extend %block--auto;
		@extend %border-radius;
		position: relative;
		z-index: level(moviecard, img);
	}

	&__title {
		@extend %block;
		margin-top: rem(15);
		text-align: center;
		font-size: rem(20);
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
