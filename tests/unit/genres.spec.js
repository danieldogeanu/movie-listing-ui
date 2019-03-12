import {mount} from '@vue/test-utils';
import Genres from '@/components/Genres.vue';

describe('Genres.vue', () => {

	const genresData = [
		{
			"id": 28,
			"name": "Action"
		},
	];

	it('called genres', () => {
		const wrapper = mount(Genres);

		expect(wrapper.name()).toMatch('Genres');
	});

	it('received an array of genres objects as prop', () => {
		const wrapper = mount(Genres);
		wrapper.setProps({genres: genresData});

		expect(wrapper.vm.genres[0].name).toBe(genresData[0].name);
	});

});