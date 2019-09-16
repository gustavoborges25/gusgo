import { mount } from '@vue/test-utils';
import '@test/base';
import DisplaysText from 'Support/components/pages/DisplaysText.vue';

function factory(text, type, weight, transform, color, italic) {
  return mount(DisplaysText, {
    propsData: {
      text,
      type,
      weight,
      transform,
      color,
      italic,
    },
  });
}

describe('DisplaysText.vue', () => {
  it('set model and expected value', () => {
    const wrapper = factory('text', 'display', 'thin', 'capitalize', 'red');
    expect(wrapper.vm.type).toBe('display');
    expect(wrapper.vm.weight).toBe('thin');
    expect(wrapper.vm.transform).toBe('capitalize');
    expect(wrapper.vm.color).toBe('red');
  });
  it('verify method classValue', () => {
    const wrapper = factory('text', 'display', 'thin', 'capitalize', 'red', true);
    expect(wrapper.vm.classValue).toEqual([
      'display-2',
      'font-weight-thin',
      'text-capitalize',
      'red--text',
      'font-italic',
    ]);
  });
  it('verify props default', () => {
    const wrapper = factory('text');
    expect(wrapper.vm.classValue).toEqual([
      'subheading',
      'font-weight-medium',
      'text-none',
      'primary--text',
      '',
    ]);
  });
});
