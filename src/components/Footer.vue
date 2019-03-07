<template>
	<footer class="footer">
		<p class="footer__line">
			By <a class="footer__link" href="https://danieldogeanu.com/" target="_blank">Daniel Dogeanu</a>
			for <a class="footer__link" href="https://www.zonedigital.com/" target="_blank" rel="nofollow noreferrer">Zone Digital</a>
		</p>
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
	margin: rem(60) 0;
	text-align: center;

	&__line {
		font-family: font(open-sans);
		font-weight: weight(regular);
		font-size: rem(13);
		text-transform: uppercase;
		color: color-scheme(footer, link);
	}

	&__link {
		color: color-scheme(footer, link);
		transition: color .2s ease;
		&:hover {
			color: color-scheme(footer, hover);
		}
	}
}
</style>
