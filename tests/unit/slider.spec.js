import {shallowMount} from '@vue/test-utils';
import Slider from '@/components/Slider.vue';

describe('Slider.vue', () => {
	it('called slider', () => {
		const wrapper = shallowMount(Slider);

		expect(wrapper.name()).toMatch('Slider');
	});
});