import { action } from '@storybook/addon-actions';
import Button from '../Button/Button.vue';
import { withTests } from '@storybook/addon-jest';
import results from '../../../public/jest-test-results.json';

export default {
  title: 'Components/Button',
  decorators: [withTests({ results })],
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'special',
        'unboxed',
        'inverse',
        'disabled',
      ],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    isBlock: { control: 'boolean' },
    isRound: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args, onClick: action('click') }; // Log the click action
  },
  template:
    '<Button v-bind="args" @click="onClick">{{ args.label }}</Button>',
});

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'md',
  isBlock: false,
  isRound: false,
  isDisabled: false,
  label: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'md',
  isBlock: false,
  isRound: false,
  isDisabled: false,
  label: 'Secondary Button',
};

export const Special = Template.bind({});
Special.args = {
  variant: 'special',
  size: 'md',
  isBlock: false,
  isRound: false,
  isDisabled: false,
  label: 'Special Button',
};

export const Unboxed = Template.bind({});
Unboxed.args = {
  variant: 'unboxed',
  size: 'md',
  isBlock: false,
  isRound: false,
  isDisabled: false,
  label: 'Unboxed Button',
};

export const Inverse = Template.bind({});
Inverse.args = {
  variant: 'inverse',
  size: 'md',
  isBlock: false,
  isRound: false,
  isDisabled: false,
  label: 'Inverse Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  size: 'md',
  isBlock: false,
  isRound: false,
  isDisabled: true,
  label: 'Disabled Button',
};

export const Block = Template.bind({});
Block.args = {
  variant: 'primary',
  size: 'md',
  isBlock: true,
  isRound: false,
  isDisabled: false,
  label: 'Block Button',
};

export const Rounded = Template.bind({});
Rounded.args = {
  variant: 'primary',
  size: 'md',
  isBlock: false,
  isRound: true,
  isDisabled: false,
  label: 'Rounded Button',
};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  variant: 'primary',
  size: 'xs',
  isBlock: false,
  isRound: false,
  isDisabled: false,
  label: 'Extra Small Button',
};

export const Small = Template.bind({});
Small.args = {
  variant: 'primary',
  size: 'sm',
  isBlock: false,
  isRound: false,
  isDisabled: false,
  label: 'Small Button',
};

export const Medium = Template.bind({});
Medium.args = {
  variant: 'primary',
  size: 'md',
  isBlock: false,
  isRound: false,
  isDisabled: false,
  label: 'Medium Button',
};

export const Large = Template.bind({});
Large.args = {
  variant: 'primary',
  size: 'lg',
  isBlock: false,
  isRound: false,
  isDisabled: false,
  label: 'Large Button',
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  variant: 'primary',
  size: 'xl',
  isBlock: false,
  isRound: false,
  isDisabled: false,
  label: 'Extra Large Button',
};
