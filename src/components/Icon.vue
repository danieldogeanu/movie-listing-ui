<template>
	<svg class="icon" :class="name">
		<use :xlink:href="'#' + name" />
	</svg>
</template>

<script>
export default {
	name: 'Icon',
	props: {
		name: String,
	}
}
</script>

<style lang="scss">
.icon {
	display: inline-block;
	vertical-align: middle;
	width: rem(24);
	height: rem(24);
	margin: 0;
	padding: 0;
}
</style>
