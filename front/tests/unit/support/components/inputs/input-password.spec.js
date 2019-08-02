import { mount } from '@vue/test-utils';
import '@test/base';
import InputPassword from 'Support/components/inputs/InputPassword.vue';

function factory(value, required, min) {
  return mount(InputPassword, {
    propsData: {
      value,
      required,
      min,
    },
  });
}

describe('InputPassword.vue', () => {
  it('set model and expected value', () => {
    const wrapper = factory('123456789');
    expect(wrapper.vm.password).toBe('123456789');
  });
  it('verify emmited input event', () => {
    const wrapper = factory();
    wrapper.vm.password = '123456789';
    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input[0][0]).toEqual('123456789');
  });
  it('verify error rule required', () => {
    const wrapper = factory('', true);
    const rule = wrapper.vm.rules.required;
    expect(rule()).toEqual('Senha obrigatória!');
  });
  it('verify rule required', () => {
    const wrapper = factory('123456789', true);
    const rule = wrapper.vm.rules.required;
    expect(rule('123456789')).toBeTruthy();
  });
  it('verify rule min valid password', () => {
    const wrapper = factory('123456789', true, true);
    const rule = wrapper.vm.rules.min;
    expect(rule('123456789')).toBeTruthy();
  });
  it('verify rule min invalid password', () => {
    const wrapper = factory('12345', true, true);
    const rule = wrapper.vm.rules.min;
    expect(rule('12345')).toEqual('Senha deve ter mais de 8 caracteres!');
  });
});
