// src/components/TextField/TextField.test.js

import { mount } from '@vue/test-utils';
import TextField from './TextField.vue';

describe('TextField.vue', () => {
  it('renders text field', () => {
    const wrapper = mount(TextField, {
      props: {
        id: 'test',
        label: 'Test Label',
        modelValue: '',
      },
    });
    expect(wrapper.find('input').exists()).toBe(true);
  });

  it('binds v-model correctly', async () => {
    const wrapper = mount(TextField, {
      props: {
        id: 'test',
        label: 'Test Label',
        modelValue: 'test',
      },
    });
    const input = wrapper.find('input');
    expect(input.element.value).toBe('test');
    await input.setValue('new value');
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([
      'new value',
    ]);
  });

  it('shows helper text when provided', () => {
    const wrapper = mount(TextField, {
      props: {
        id: 'test',
        label: 'Test Label',
        helperText: 'Helper text',
        modelValue: '',
      },
    });
    expect(wrapper.find('.text-grey-dark').text()).toBe(
      'Helper text'
    );
  });

  it('shows error message on invalid input', async () => {
    const wrapper = mount(TextField, {
      props: {
        id: 'test',
        label: 'Test Label',
        errorText: 'Invalid input',
        showError: true,
        modelValue: '',
      },
    });
    expect(wrapper.find('.text-intrepid-red').text()).toBe(
      'Invalid input'
    );
  });

  it('is disabled when isDisabled is true', () => {
    const wrapper = mount(TextField, {
      props: {
        id: 'test',
        label: 'Test Label',
        isDisabled: true,
        modelValue: '',
      },
    });
    expect(
      wrapper.find('input').attributes('disabled')
    ).toBeDefined();
  });
});
