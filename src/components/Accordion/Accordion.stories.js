import Accordion from '../Accordion/Accordion.vue';
import { withTests } from '@storybook/addon-jest';
import results from '../../../public/jest-test-results.json';

export default {
  title: 'Components/Accordion',
  decorators: [withTests({ results })],
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'highlighted', 'collapsible'],
    },
    items: { control: 'object' },
    title: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { Accordion },
  setup() {
    return { args };
  },
  template: '<Accordion v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  title: 'Example Accordion',
  items: [
    { title: 'Section 1', content: 'Content for section 1' },
    { title: 'Section 2', content: 'Content for section 2' },
    { title: 'Section 3', content: 'Content for section 3' },
  ],
};

export const Bordered = Template.bind({});
Bordered.args = {
  variant: 'bordered',
  title: 'Bordered Accordion',
  items: [
    { title: 'Section 1', content: 'Content for section 1' },
    { title: 'Section 2', content: 'Content for section 2' },
    { title: 'Section 3', content: 'Content for section 3' },
  ],
};

export const Highlighted = Template.bind({});
Highlighted.args = {
  variant: 'highlighted',
  title: 'Highlighted Accordion',
  items: [
    { title: 'Section 1', content: 'Content for section 1' },
    { title: 'Section 2', content: 'Content for section 2' },
    { title: 'Section 3', content: 'Content for section 3' },
  ],
};

export const Collapsible = Template.bind({});
Collapsible.args = {
  variant: 'collapsible',
  title: 'Collapsible Accordion',
  items: [
    { title: 'Section 1', content: 'Content for section 1' },
    { title: 'Section 2', content: 'Content for section 2' },
    { title: 'Section 3', content: 'Content for section 3' },
  ],
};
