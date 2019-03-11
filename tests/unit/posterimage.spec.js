import {shallowMount} from '@vue/test-utils';
import PosterImage from '@/components/PosterImage.vue';

describe('PosterImage.vue', () => {
	it('called poster-image', () => {
		const wrapper = shallowMount(PosterImage);

		expect(wrapper.name()).toMatch('PosterImage');
	});
});