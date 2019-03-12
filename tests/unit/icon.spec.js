import {shallowMount} from '@vue/test-utils';
import Icon from '@/components/Icon.vue';

describe('Icon.vue', () => {
	it('called icon', () => {
		const wrapper = shallowMount(Icon);

		expect(wrapper.name()).toMatch('Icon');
	});

	it('contains icon class', () => {
		const wrapper = shallowMount(Icon);

		expect(wrapper.classes('icon')).toBe(true);
	});
});