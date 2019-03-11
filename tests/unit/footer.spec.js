import {shallowMount} from '@vue/test-utils';
import Footer from '@/components/Footer.vue';

describe('Footer.vue', () => {
	it('called footer', () => {
		const wrapper = shallowMount(Footer);

		expect(wrapper.name()).toMatch('Footer');
	});
});