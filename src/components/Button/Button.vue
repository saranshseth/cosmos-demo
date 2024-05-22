<template>
  <button :class="buttonClasses" :disabled="isDisabled" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
/**
 * Button component
 * @component
 * @prop {String} variant - Specifies the style variant of the button. Options are `primary`, `secondary`, `special`, `unboxed`, `inverse`, `disabled`.
 * @prop {String} size - Specifies the size of the button. Options are `xs`, `sm`, `md`, `lg`, `xl`.
 * @prop {Boolean} isBlock - If true, the button will be displayed as a block element (full width).
 * @prop {Boolean} isRound - If true, the button will have fully rounded corners.
 * @prop {Boolean} isDisabled - If true, the button will be disabled.
 */
export default {
  name: 'Button',
  props: {
    variant: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'md'
    },
    isBlock: {
      type: Boolean,
      default: false
    },
    isRound: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(event) {
      console.log('Button clicked!');
      this.$emit('click', event); // Emit click event
    }
  },
  computed: {
    buttonClasses() {
      return [
        'focus:outline-none',
        'transition-all',
        'duration-300',
        'ease-in-out',
        this.sizeClasses,
        this.variantClasses,
        this.isBlock ? 'w-full' : '',
        this.isRound ? 'rounded-full' : 'rounded-md',
        this.isDisabled ? 'bg-grey-lighter border border-grey text-grey-dark-alpha pointer-events-none cursor-not-allowed' : '',
      ];
    },
    sizeClasses() {
      return {
        'xs': 'px-2 py-1 text-xs',
        'sm': 'px-3 py-1.5 text-sm',
        'md': 'px-4 py-2 text-md',
        'lg': 'px-5 py-2.5 text-lg',
        'xl': 'px-6 py-3 text-xl',
      }[this.size];
    },
    variantClasses() {
      return {
        'primary': 'bg-midnight hover:bg-midnight-light text-white',
        'secondary': 'bg-transparent border border-solid border-midnight hover:bg-midnight hover:text-white text-midnight',
        'special': 'bg-intrepid-red-dark hover:bg-intrepid-red-darker text-white',
        'unboxed': 'bg-transparent hover:bg-grey-lighter-alpha text-midnight',
        'inverse-primary': 'bg-white border border-white hover:bg-white text-midnight',
        'inverse-secondary': 'bg-transparent border border-white hover:bg-white text-midnight',
      }[this.variant];
    },
  }
};
</script>

<style scoped>
/* Add any additional custom styles here */
</style>
