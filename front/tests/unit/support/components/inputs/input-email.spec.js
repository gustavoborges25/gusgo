import { mount } from '@vue/test-utils';
import '@test/base';
import InputEmail from 'Support/components/inputs/InputEmail.vue';

function factory(value, required) {
  return mount(InputEmail, {
    propsData: {
      value,
      required,
    },
  });
}

describe('InputEmail.vue', () => {
  it('set model and expected value', () => {
    const wrapper = factory('aaaa@mail.com');
    expect(wrapper.vm.email).toBe('aaaa@mail.com');
  });
  it('verify emmited input event', () => {
    const wrapper = factory();
    wrapper.vm.email = 'aaaa@mail.com';
    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input[0][0]).toEqual('aaaa@mail.com');
  });
  it('verify error rule required', () => {
    const wrapper = factory('', true);
    const rule = wrapper.vm.rules.required;
    expect(rule()).toEqual('E-mail obrigatório!');
  });
  it('verify rule required', () => {
    const wrapper = factory('aaaa@mail.com', true);
    const rule = wrapper.vm.rules.required;
    expect(rule('aaaa@mail.com')).toBeTruthy();
  });
  it('verify rule valid email', () => {
    const wrapper = factory('aaaa@mail.com');
    const rule = wrapper.vm.rules.valid;
    expect(rule('aaaa@mail.com')).toBeTruthy();
  });
  it('verify rule invalid email', () => {
    const wrapper = factory('aaaa');
    const rule = wrapper.vm.rules.valid;
    expect(rule('aaaa')).toEqual('E-mail inválido!');
  });
});
