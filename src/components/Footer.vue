<template>
	<footer class="footer">
		<p class="footer__line">
			By <a class="footer__link" href="https://danieldogeanu.com/" target="_blank">Daniel Dogeanu</a>
		</p>
		<a class="footer__logo" href="https://www.themoviedb.org/" target="_blank" rel="nofollow noreferrer">
			<img class="footer__img" src="../assets/images/tmdb-logo-blue.svg" alt="TMDb Logo" />
		</a>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
}
</script>

<style scoped lang="scss">
@import '../styles/includes';

.footer {
	display: block;
	margin: rem(120) 0 rem(40) 0;
	padding: 0 rem(20);
	text-align: center;
	@include breakpoint(min, rem(481)) {
		margin: rem(120) 0 rem(60) 0;
	}

	&__line {
		font-family: font(open-sans);
		font-weight: weight(regular);
		font-size: rem(11);
		text-transform: uppercase;
		color: color-scheme(footer, link);
		@include breakpoint(min, rem(301)) {
			font-size: rem(12);
		}
		@include breakpoint(min, rem(481)) {
			font-size: rem(13);
		}
	}

	&__link {
		color: color-scheme(footer, link);
		transition: color .2s ease;
		&:hover {
			color: color-scheme(footer, hover);
		}
	}

	&__logo {
		display: block;
		opacity: .8;
		width: rem(140);
		margin: rem(20) auto;
		@include breakpoint(min, rem(481)) {
			width: rem(160);
		}
	}

	&__img {
		width: 100%;
		height: auto;
	}
}
</style>
