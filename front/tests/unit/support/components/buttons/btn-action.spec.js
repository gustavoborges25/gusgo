import { mount } from '@vue/test-utils';
import '@test/base';
import BtnAction from 'Support/components/buttons/BtnAction.vue';

function factory(icon, message) {
  return mount(BtnAction, {
    propsData: {
      icon,
      message,
    },
  });
}

describe('BtnAction.vue', () => {
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
