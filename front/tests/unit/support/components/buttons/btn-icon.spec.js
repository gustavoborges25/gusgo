import { mount } from '@vue/test-utils';
import '@test/base';
import BtnIcon from 'Support/components/buttons/BtnIcon.vue';

function factory(icon, message, border) {
  return mount(BtnIcon, {
    mocks: {
      $t: () => 'msg error',
    },
    propsData: {
      icon,
      message,
      border,
    },
  });
}

describe('BtnIcon.vue', () => {
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
