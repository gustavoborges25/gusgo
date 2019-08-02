import { mount } from '@vue/test-utils';
import '@test/base';
import BtnText from 'Support/components/buttons/BtnText.vue';

function factory(icon, message) {
  return mount(BtnText, {
    propsData: {
      icon,
      message,
    },
  });
}

describe('BtnText.vue', () => {
  it('verify click btn action', () => {
    const wrapper = factory();
    const button = wrapper.find('button');
    button.trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
  });
  it('verify props on btn action', () => {
    const wrapper = factory('edit', 'MessageOnButon');
    expect(wrapper.html()).toContain('edit');
    expect(wrapper.html()).toContain('MessageOnButon');
  });
});
