<template>
	<div class="slider">
		<label class="slider__label" for="slider__input">Min: </label>
		<input type="range" 
			id="slider__input" class="slider__input" 
			min="0" max="10" step="0.5" v-model="value" />
		<label class="slider__value" for="slider__input">{{valuePadded}}</label>
	</div><!-- slider -->
</template>

<script>
export default {
	name: 'Slider',
	data() {
		return {
			value: 3,
		};
	},
	computed: {
		valuePadded() {
			return Number(this.value).toFixed(1);
		}
	},
}
</script>

<style scoped lang="scss">
@import '../styles/includes';

%label {
	display: inline-block;
	font-family: font(open-sans);
	text-transform: uppercase;
	color: color-scheme(sortbar, btn);
}

.slider {
	display: flex;
	align-items: center;
	margin: 0 rem(5);
	@include breakpoint(min, rem(481)) {
		margin: 0 rem(10);
	}
	@include breakpoint(min, rem(601)) {
		margin: 0 rem(20);
	}

	&__label {
		@extend %label;
		font-weight: weight(regular);
		font-size: rem(12);
		@include breakpoint(min, rem(481)) {
			font-size: rem(14);
		}
		@include breakpoint(min, rem(601)) {
			font-size: rem(16);
		}
	}

	&__value {
		@extend %label;
		min-width: rem(30);
		font-weight: weight(semi-bold);
		font-size: rem(14);
		@include breakpoint(min, rem(481)) {
			font-size: rem(16);
		}
		@include breakpoint(min, rem(601)) {
			font-size: rem(18);
		}
	}

	input[type=range] {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		display: inline-block;
		width: rem(120);
		height: rem(30);
		background-color: transparent;
		margin: 0 rem(5);
		outline: none;
		@include breakpoint(min, rem(481)) {
			margin: 0 rem(10);
		}
		@include breakpoint(min, rem(601)) {
			margin: 0 rem(20);
		}

		&:focus, &:active {
			outline: none !important;
		}
		&::-moz-focus-outer {
			border: 0 none !important;
			outline: none !important;
    }

		& { // Slider Track
			// NOTE: We use separate() here because the browser won't know which rule to choose
			// if we use @extend and the properties are grouped with commas, instead of on their own.
			@include separate((
				'::-webkit-slider-runnable-track',
				'::-moz-range-track',
				'::-ms-track'
			)) {
				cursor: pointer;
				width: 100%;
				height: rem(4);
				&:focus, &:active {
					outline: none !important;
				}
			}
			@include separate((
				'::-webkit-slider-runnable-track',
				'::-moz-range-track'
			)) {
				background: color-scheme(slider, track);
				border: 0 none;
			}
			&::-ms-track {
				background: transparent;
				border-color: transparent;
				color: transparent;
			}
			@include separate((
				'::-ms-fill-lower',
				'::-ms-fill-upper',
			)) {
				background: color-scheme(slider, track);
				border: 0 none;
			}
		}

		& { // Slider Thumb
			@include separate((
				'::-webkit-slider-thumb',
				'::-moz-range-thumb',
				'::-ms-thumb',
			)) {
				cursor: pointer;
				border: 0 none;
				height: rem(26);
				width: rem(26);
				border-radius: 50%;
				background: color-scheme(slider, thumb);
				&:focus, &:active {
					outline: none !important;
				}
			}
			&::-webkit-slider-thumb {
				-webkit-appearance: none;
				margin-top: rem(-10);
			}
			&::-ms-thumb {
				margin-bottom: rem(-12) !important;
			}
		}
	}

	@include breakpoint(max, rem(300)) {
		&--mobile {
			input[type=range] {
				width: 100%;
			}
		}
	}

}
</style>
