import {shallowMount} from '@vue/test-utils';
import Genres from '@/components/Genres.vue';

describe('Genres.vue', () => {
	it('called genres', () => {
		const wrapper = shallowMount(Genres);

		expect(wrapper.name()).toMatch('Genres');
	});
});