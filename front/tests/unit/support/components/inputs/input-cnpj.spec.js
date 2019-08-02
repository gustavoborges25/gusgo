import { mount } from '@vue/test-utils';
import '@test/base';
import InputCnpj from 'Support/components/inputs/InputCnpj.vue';

function factory(value, required) {
  return mount(InputCnpj, {
    propsData: {
      value,
      required,
    },
  });
}

describe('InputCnpj.vue', () => {
  it('set model and expected value', () => {
    const wrapper = factory('12345678910121');
    expect(wrapper.vm.cnpj).toBe('12345678910121');
  });
  it('verify emmited input event', () => {
    const wrapper = factory();
    wrapper.vm.cnpj = '12345678910121';
    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input[0][0]).toEqual('12345678910121');
  });
  it('verify error rule required', () => {
    const wrapper = factory('', true);
    const rule = wrapper.vm.rules.required;
    expect(rule()).toEqual('Cnpj obrigatório!');
  });
  it('verify rule required', () => {
    const wrapper = factory('12345678910121', true);
    const rule = wrapper.vm.rules.required;
    expect(rule('12345678910121')).toBeTruthy();
  });
  it('verify rule valid cnpj', () => {
    const wrapper = factory('19639972000159');
    const rule = wrapper.vm.rules.valid;
    expect(rule('19639972000159')).toBeTruthy();
  });
  it('verify rule invalid cnpj because dv1', () => {
    const wrapper = factory('19639972000151');
    const rule = wrapper.vm.rules.valid;
    expect(rule('19639972000151')).toEqual('Cnpj inválido!');
  });
  it('verify rule invalid cnpj because dv2', () => {
    const wrapper = factory('19639972000111');
    const rule = wrapper.vm.rules.valid;
    expect(rule('19639972000111')).toEqual('Cnpj inválido!');
  });
  it('verify rule invalid cnpj because length', () => {
    const wrapper = factory('12345');
    const rule = wrapper.vm.rules.valid;
    expect(rule('12345')).toEqual('Cnpj inválido!');
  });
});
