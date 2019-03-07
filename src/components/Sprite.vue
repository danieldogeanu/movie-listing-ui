<template>
	<div class="sprite">
		<svg aria-hidden="true" role="presentation" xmlns="http://www.w3.org/2000/svg">

			<symbol 
				:viewBox="viewBox" 
				fill="none" 
				stroke="currentColor" 
				:stroke-width="strokeWidth" 
				:stroke-linecap="strokeLineCap" 
				:stroke-linejoin="strokeLineJoin" 
				id="chevron-up">
				<path d="M18 15l-6-6-6 6"/>
			</symbol>

			<symbol 
				:viewBox="viewBox" 
				fill="none" 
				stroke="currentColor" 
				:stroke-width="strokeWidth" 
				:stroke-linecap="strokeLineCap" 
				:stroke-linejoin="strokeLineJoin" 
				id="chevron-down">
				<path d="M6 9l6 6 6-6"/>
			</symbol>

		</svg>
	</div>
</template>

<script>
export default {
	name: 'Sprite',
	data() {
		return {
			viewBox: '0 0 24 24',
			strokeWidth: 1,
			strokeLineCap: 'round',
			strokeLineJoin: 'round',
		}
	}
}
</script>

<style>
.sprite {
	display: none;
}
</style>
