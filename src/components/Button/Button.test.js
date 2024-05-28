// src/components/Button/Button.test.js

import { mount } from '@vue/test-utils';
import Button from './Button.vue';

describe('Button.vue', () => {
  it('renders primary button', () => {
    const wrapper = mount(Button, {
      props: { variant: 'primary' },
    });
    expect(wrapper.classes()).toContain('bg-midnight');
  });

  it('emits click event when clicked', async () => {
    const wrapper = mount(Button);
    await wrapper.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('click');
  });

  it('is disabled when isDisabled is true', () => {
    const wrapper = mount(Button, {
      props: { isDisabled: true },
    });
    expect(wrapper.attributes('disabled')).toBeDefined();
  });

  it('has rounded class when isRound is true', () => {
    const wrapper = mount(Button, {
      props: { isRound: true },
    });
    expect(wrapper.classes()).toContain('rounded-full');
  });
});
