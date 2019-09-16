import { mount } from '@vue/test-utils';
import '@test/base';
import DataTable from 'Support/components/pages/DataTable.vue';
import BtnAction from 'Support/components/buttons/BtnAction.vue';

function factory(headers, items) {
  return mount(DataTable, {
    stubs: {
      'btn-action': BtnAction,
    },
    propsData: {
      headers,
      items,
    },
  });
}

describe('DataTable.vue', () => {
  it('verify default props value', () => {
    const wrapper = factory();
    expect(wrapper.vm.headers).toEqual({});
    expect(wrapper.vm.items).toEqual([]);
  });
  it('verify set props value', () => {
    const wrapper = factory([{}]);
    expect(wrapper.vm.headers).toEqual({});
    expect(wrapper.vm.items).toEqual([]);
  });
  it('verify method showPagination', () => {
    const value = {
      page: 2,
      rowsPerPage: 10,
      totalItems: 100,
      data: [
        {},
      ],
    };
    const wrapper = factory({ value });
    expect(wrapper.vm.value.page).toBe(2);
    expect(wrapper.vm.value.rowsPerPage).toBe(10);
    expect(wrapper.vm.value.totalItems).toBe(100);
    expect(wrapper.vm.value.data).toHaveLength(1);
  });
  it('verify method onClickEdit', () => {
    const value = {
      page: 2,
      rowsPerPage: 10,
      totalItems: 100,
      data: [
        {
          id: '1',
          name: 'Name',
        },
      ],
    };
    const wrapper = factory({ value });
    const buttons = wrapper.findAll(BtnAction);
    buttons.at(0).trigger('click');
    expect(wrapper.emitted().edit).toBeTruthy();
  });
  it('verify method onClickDelete', () => {
    const value = {
      page: 2,
      rowsPerPage: 10,
      totalItems: 100,
      data: [
        {
          id: '1',
          name: 'Name',
        },
      ],
    };
    const wrapper = factory({ value });
    const buttons = wrapper.findAll(BtnAction);
    buttons.at(1).trigger('click');
    expect(wrapper.emitted().delete).toBeTruthy();
  });
});
