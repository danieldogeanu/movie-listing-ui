import {shallowMount} from '@vue/test-utils';
import SortBar from '@/components/SortBar.vue';

describe('SortBar.vue', () => {
	it('called sort-bar', () => {
		const wrapper = shallowMount(SortBar);

		expect(wrapper.name()).toMatch('SortBar');
	});
});