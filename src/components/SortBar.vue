<template>
	<div class="sortbar">

		<div class="sortbar__inner">

			<div class="sortbar__sort">

				<button class="sortbar__btn" 
					:class="{'sortbar__btn--active': theKey === 'popular'}"
					@click="requestKeyChange('popular')">Popular</button>

				<button class="sortbar__btn" 
					:class="{'sortbar__btn--active': theKey === 'rating'}"
					@click="requestKeyChange('rating')">Rating</button>

				<slider class="sortbar--hide-mobile" 
					:class="{'slider--active': theKey === 'rating'}" 
					:minRating="minRating"
					@ratingChange="changeRating" />

			</div>

			<div class="sortbar__dir">

				<button class="sortbar__btn--icon" title="Ascending"
					:class="{'sortbar__btn--active': theDir === 'asc'}"
					@click="requestDirChange('asc')">
					<icon name="chevron-up" />
				</button>
				
				<button class="sortbar__btn--icon" title="Descending"
					:class="{'sortbar__btn--active': theDir === 'desc'}"
					@click="requestDirChange('desc')">
					<icon name="chevron-down" />
				</button>

			</div>

		</div><!-- sortbar__inner -->

		<div class="sortbar__under" 
			:class="{'sortbar__under--active': theKey === 'rating'}">
			<slider class="sortbar--hide-desktop slider--mobile" 
				:class="{'slider--active': theKey === 'rating'}"
				:minRating="minRating"
				@ratingChange="changeRating" />
		</div><!-- sortbar__under -->

	</div><!-- sortbar -->
</template>

<script>
import Icon from './Icon.vue';
import Slider from './Slider.vue';

export default {
	name: 'SortBar',
	props: {
		theKey: String,
		theDir: String,
	},
	data() {
		return {
			minRating: 3
		};
	},
	components: {
		'icon': Icon,
		'slider': Slider,
	},
	methods: {

		// Emit an event when any of the sort buttons are clicked 
		// and pass the selected value to the parent component.
		requestKeyChange(value) {
			this.$emit('keyChange', value);
		},

		// Emit an event when any of the dir buttons are clicked 
		// and pass the selected value to the parent component.
		requestDirChange(value) {
			this.$emit('dirChange', value);
		},

		// When the ratingChange event is triggered on the Slider,
		// get the event value and set it as minRating. We also have to
		// emit a new event to pass the value further to the parent component.
		changeRating(value) {
			this.minRating = Number(value);
			this.$emit('ratingChanged', value);
    },

	},
}
</script>

<style scoped lang="scss">
@import '../styles/includes';

%sortbtn {
	cursor: pointer;
	margin: rem(6) rem(10);
	border: 0 none;
	background: transparent;
	font-family: font(open-sans);
	font-weight: weight(regular);
	font-size: rem(13);
	text-transform: uppercase;
	color: color-scheme(sortbar, btn);
	transition: color .2s ease;
	@include breakpoint(min, rem(311)) {
		margin: 0 rem(10);
	}
	@include breakpoint(min, rem(481)) {
		font-size: rem(14);
	}
	@include breakpoint(min, rem(601)) {
		margin: 0 rem(20);
		font-size: rem(16);
	}
	&:hover {
		color: color-scheme(sortbar, hover);
	}
	&:focus, &:active {
		outline: none;
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
	flex-direction: column;
	width: 100%;
	margin-bottom: rem(20);

	&__inner {
		display: flex;
		justify-content: space-between;
		align-items: center;		
	}

	&__sort {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		padding: 0 rem(10);
		@include breakpoint(min, rem(601)) {
			padding: 0;
		}
	}

	&__dir {
		display: flex;
		flex-wrap: nowrap;
		flex-direction: column;
		align-items: flex-end;
		flex-basis: rem(100);
		width: rem(100);
		padding: 0 rem(10) 0 0;
		@include breakpoint(min, rem(311)) {
			flex-direction: row;
			align-items: center;
			justify-content: flex-end;
		}
		@include breakpoint(min, rem(481)) {
			flex-basis: rem(100);
			width: rem(100);
			padding: 0 rem(10) 0 0;
		}
		@include breakpoint(min, rem(601)) {
			flex-basis: rem(110);
			width: rem(110);
			padding: 0 rem(15) 0 0;
		}
	}

	&__btn {
		@extend %sortbtn;
		&--active {
			color: color-scheme(sortbar, hover);
		}
		&--icon {
			@extend %sortbtn;
			@extend %sortbtn__icon;
			margin: 0;
			.icon {
				@extend %sortbtn__icon;
			}
		}
	}

	&__under {
		display: none;
		justify-content: center;
		margin: rem(20) 0 rem(15) 0;
		padding: 0 rem(15);
		@include breakpoint(min, rem(301)) {
			padding: 0 rem(10);
		}
		@include breakpoint(min, rem(481)) {
			justify-content: flex-start;
			margin-top: rem(10);
		}
		@include breakpoint(min, rem(601)) {
			padding: 0;
		}
		@include breakpoint(min, rem(741)) {
			margin-top: 0;
		}
		&--active {
			display: flex;
		}
	}

	@include breakpoint(max, rem(740)) {
		&--hide-mobile {
			display: none;
		}
	}
	@include breakpoint(min, rem(741)) {
		&--hide-desktop {
			display: none;
		}
	}
}
</style>
