import {shallowMount} from '@vue/test-utils';
import MoviesGrid from '@/components/MoviesGrid.vue';

describe('MoviesGrid.vue', () => {
	it('called movies-grid', () => {
		const wrapper = shallowMount(MoviesGrid);

		expect(wrapper.name()).toMatch('MoviesGrid');
	});
});