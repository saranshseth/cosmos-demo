import { action } from '@storybook/addon-actions';
import TextField from '../TextField/TextField.vue';
import { withTests } from '@storybook/addon-jest';
import results from '../../../public/jest-test-results.json';

export default {
  title: 'Components/TextField',
  decorators: [withTests({ results })],
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    label: { control: 'text' },
    type: {
      control: 'select',
      options: ['text', 'number', 'password', 'search'],
    },
    placeholder: { control: 'text' },
    isDisabled: { control: 'boolean' },
    helperText: { control: 'text' },
    errorText: { control: 'text' },
    showError: { control: 'boolean' },
    isFullWidth: { control: 'boolean' },
    modelValue: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { TextField },
  setup() {
    return { args, onInput: action('input'), onBlur: action('blur') };
  },
  template:
    '<TextField v-bind="args" @input="onInput" @blur="onBlur" />',
});

export const Default = Template.bind({});
Default.args = {
  id: 'default',
  label: 'Default Text Field',
  placeholder: 'Enter text...',
  isFullWidth: false,
};

export const Number = Template.bind({});
Number.args = {
  id: 'number',
  label: 'Number Text Field',
  type: 'number',
  placeholder: 'Enter number...',
  isFullWidth: false,
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  id: 'with-helper-text',
  label: 'Text Field with Helper Text',
  placeholder: 'Enter text...',
  helperText: 'This is some helper text.',
  isFullWidth: false,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  id: 'full-width',
  label: 'Full Width Text Field',
  placeholder: 'Enter text...',
  isFullWidth: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'disabled',
  label: 'Disabled Text Field',
  placeholder: 'Enter text...',
  isDisabled: true,
  isFullWidth: false,
};

export const WithValidation = Template.bind({});
WithValidation.args = {
  id: 'with-validation',
  label: 'Text Field with Validation',
  placeholder: 'Enter text...',
  showError: true,
  errorText: 'This field is required.',
  isFullWidth: false,
};

export const Password = Template.bind({});
Password.args = {
  id: 'password',
  label: 'Password Field',
  type: 'password',
  placeholder: 'Enter password...',
  isFullWidth: false,
};

export const Search = Template.bind({});
Search.args = {
  id: 'search',
  label: 'Search Field',
  type: 'search',
  placeholder: 'Search...',
  isFullWidth: false,
};
