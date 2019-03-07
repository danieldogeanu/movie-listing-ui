<template>
	<div class="sortbar">
		<div class="sortbar__sort">
			<button class="sortbar__btn">Popular</button>
			<button class="sortbar__btn">Rating</button>
		</div>
		<div class="sortbar__dir">
			<button class="sortbar__btn--closer">up</button>
			<button class="sortbar__btn--closer">down</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SortBar'
}
</script>

<style scoped lang="scss">
@import '../styles/includes';

%sortbtn {
	cursor: pointer;
	margin: 0 rem(20);
	border: 0 none;
	background: transparent;
	font-family: font(open-sans);
	font-weight: weight(regular);
	font-size: rem(16);
	text-transform: uppercase;
	color: color-scheme(sortbar, btn);
	transition: color .2s ease;
	&:hover {
		color: color-scheme(sortbar, hover);
	}
}

.sortbar {
	display: flex;
	justify-content: space-between;

	&__dir {
		padding: 0 rem(15);
	}

	&__btn {
		@extend %sortbtn;
		&--closer {
			@extend %sortbtn;
			margin: 0 rem(5);
		}
	}
}
</style>
