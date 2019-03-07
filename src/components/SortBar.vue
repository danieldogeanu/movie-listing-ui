<template>
	<div class="sortbar">
		<div class="sortbar__sort">
			<button class="sortbar__btn">Popular</button>
			<button class="sortbar__btn">Rating</button>
		</div>
		<div class="sortbar__dir">
			<button class="sortbar__btn--icon">
				<icon name="chevron-up" />
			</button>
			<button class="sortbar__btn--icon">
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

%sortbtn__icon {
	width: rem(40);
	height: rem(40);
}

.sortbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: rem(20);

	&__dir {
		padding: 0 rem(10);
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
