// src/components/Accordion/Accordion.test.js

import { mount } from '@vue/test-utils';
import Accordion from './Accordion.vue';

describe('Accordion.vue', () => {
  it('renders the accordion with items', () => {
    const items = [
      { title: 'Item 1', content: 'Content 1' },
      { title: 'Item 2', content: 'Content 2' },
    ];
    const wrapper = mount(Accordion, {
      props: { items },
    });
    expect(wrapper.findAll('.accordion-item')).toHaveLength(2);
  });

  it('expands and collapses on header click', async () => {
    const items = [
      { title: 'Item 1', content: 'Content 1' },
      { title: 'Item 2', content: 'Content 2' },
    ];
    const wrapper = mount(Accordion, {
      props: { items },
    });
    const headers = wrapper.findAll('.accordion-header');
    await headers[0].trigger('click');
    expect(wrapper.findAll('.accordion-content')[0].isVisible()).toBe(
      true
    );
    await headers[0].trigger('click');
    expect(wrapper.findAll('.accordion-content')[0].isVisible()).toBe(
      false
    );
  });
});
