import {shallowMount} from '@vue/test-utils';
import Header from '@/components/Header.vue';

describe('Header.vue', () => {
	it('called header', () => {
		const wrapper = shallowMount(Header);

		expect(wrapper.name()).toMatch('Header');
	});

	it('renders props.title when passed', () => {
		const title = 'Movies List';
		const wrapper = shallowMount(Header, {
			propsData: {title}
		});

		expect(wrapper.text()).toMatch(title);
	});
});