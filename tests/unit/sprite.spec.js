import {shallowMount} from '@vue/test-utils';
import Sprite from '@/components/Sprite.vue';

describe('Sprite.vue', () => {
	it('called sprite', () => {
		const wrapper = shallowMount(Sprite);

		expect(wrapper.name()).toMatch('Sprite');
	});
});