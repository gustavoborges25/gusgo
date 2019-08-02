import { mount } from '@vue/test-utils';
import '@test/base';
import InputCpf from 'Support/components/inputs/InputCpf.vue';

function factory(value, required) {
  return mount(InputCpf, {
    propsData: {
      value,
      required,
    },
  });
}

describe('InputCpf.vue', () => {
  it('set model and expected value', () => {
    const wrapper = factory('12345678955');
    expect(wrapper.vm.cpf).toBe('12345678955');
  });
  it('verify emmited input event', () => {
    const wrapper = factory();
    wrapper.vm.cpf = '12345678955';
    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input[0][0]).toEqual('12345678955');
  });
  it('verify error rule required', () => {
    const wrapper = factory('', true);
    const rule = wrapper.vm.rules.required;
    expect(rule()).toEqual('Cpf obrigatório!');
  });
  it('verify rule required', () => {
    const wrapper = factory('12345678955', true);
    const rule = wrapper.vm.rules.required;
    expect(rule('12345678955')).toBeTruthy();
  });
  it('verify rule valid Cpf', () => {
    const wrapper = factory('77715324035');
    const rule = wrapper.vm.rules.valid;
    expect(rule('77715324035')).toBeTruthy();
  });
  it('verify rule invalid Cpf because dv1', () => {
    const wrapper = factory('77715324038');
    const rule = wrapper.vm.rules.valid;
    expect(rule('77715324038')).toEqual('Cpf inválido!');
  });
  it('verify rule invalid Cpf because dv2', () => {
    const wrapper = factory('77715324045');
    const rule = wrapper.vm.rules.valid;
    expect(rule('77715324045')).toEqual('Cpf inválido!');
  });
  it('verify rule invalid Cpf because length', () => {
    const wrapper = factory('12345');
    const rule = wrapper.vm.rules.valid;
    expect(rule('12345')).toEqual('Cpf inválido!');
  });
});
