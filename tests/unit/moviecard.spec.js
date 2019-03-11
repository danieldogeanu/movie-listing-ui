import {shallowMount} from '@vue/test-utils';
import MovieCard from '@/components/MovieCard.vue';

describe('MovieCard.vue', () => {
	it('called movie-card', () => {
		const wrapper = shallowMount(MovieCard);

		expect(wrapper.name()).toMatch('MovieCard');
	});
});