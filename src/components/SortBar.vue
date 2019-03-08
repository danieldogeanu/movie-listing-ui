<template>
	<div class="sortbar">
		<div class="sortbar__sort">
			<button class="sortbar__btn">Popular</button>
			<button class="sortbar__btn">Rating</button>
		</div>
		<div class="sortbar__dir">
			<button class="sortbar__btn--icon" title="Ascending">
				<icon name="chevron-up" />
			</button>
			<button class="sortbar__btn--icon" title="Descending">
				<icon name="chevron-down" />
			</button>
		</div>
	</div>
</template>

<script>
import Icon from './Icon.vue';

export default {
	name: 'SortBar',
	components: {
		'icon': Icon
	}
}
</script>

<style scoped lang="scss">
@import '../styles/includes';

%sortbtn {
	cursor: pointer;
	margin: 0 rem(5);
	border: 0 none;
	background: transparent;
	font-family: font(open-sans);
	font-weight: weight(regular);
	font-size: rem(12);
	text-transform: uppercase;
	color: color-scheme(sortbar, btn);
	transition: color .2s ease;
	@include breakpoint(min, rem(481)) {
		margin: 0 rem(10);
		font-size: rem(14);
	}
	@include breakpoint(min, rem(601)) {
		margin: 0 rem(20);
		font-size: rem(16);
	}
	&:hover {
		color: color-scheme(sortbar, hover);
	}
}

%sortbtn__icon {
	width: rem(30);
	height: rem(30);
	@include breakpoint(min, rem(481)) {
		width: rem(35);
		height: rem(35);
	}
	@include breakpoint(min, rem(601)) {
		width: rem(40);
		height: rem(40);
	}
}

.sortbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: rem(20);

	&__sort {
		padding: 0 rem(15);
		@include breakpoint(min, rem(481)) {
			padding: 0 rem(10);
		}
		@include breakpoint(min, rem(601)) {
			padding: 0;
		}
	}

	&__dir {
		padding: 0 rem(15);
	}

	&__btn {
		@extend %sortbtn;
		&--icon {
			@extend %sortbtn;
			@extend %sortbtn__icon;
			margin: 0;
			.icon {
				@extend %sortbtn__icon;
			}
		}
	}
}
</style>
