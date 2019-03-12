<template>
	<div class="errorstate">
		<h2 class="errorstate__title">{{error.title}}</h2>
		<div class="errorstate__content">
			<p class="errorstate__msg" 
				v-for="(msg, index) in error.messages"
				:key="index">{{msg}}</p>
			<p class="errorstate__msg">Please try again later.</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ErrorState',
	props: {
		error: Object,
	},
}
</script>

<style scoped lang="scss">
@import '../styles/includes';

.errorstate {
	padding: rem(60) 0;
	text-align: center;

	&__title {
		font-size: rem(17);
		font-weight: weight(bold);
		text-transform: uppercase;
		color: color-scheme(state, error);
	}

	&__content {
		margin: rem(30) 0;
	}

	&__msg {
		font-size: rem(16);
		margin: rem(12) 0;
	}
}
</style>
