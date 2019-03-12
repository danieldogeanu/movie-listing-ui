import {mount} from '@vue/test-utils';
import Footer from '@/components/Footer.vue';

describe('Footer.vue', () => {
	it('called footer', () => {
		const wrapper = mount(Footer);

		expect(wrapper.name()).toMatch('Footer');
	});

	it('contains footer class', () => {
		const wrapper = mount(Footer);

		expect(wrapper.classes('footer')).toBe(true);
	});
});