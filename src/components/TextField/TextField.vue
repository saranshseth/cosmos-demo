<template>
  <div :class="containerClasses">
    <div class="relative">
      <input :id="id" :type="type" :class="inputClasses" :placeholder="isFocused || modelValue ? placeholder : ''"
        :disabled="isDisabled" :value="modelValue" @input="onInput" @focus="onFocus" @blur="onBlur" ref="input" />
      <label :for="id" :class="[labelClasses, { 'transform -translate-y-6 scale-75': isFocused || modelValue }]">{{
        label }}</label>
    </div>
    <p v-if="helperText" class="text-sm text-grey-dark mt-1">{{ helperText }}</p>
    <p v-if="showError" class="text-sm text-intrepid-red mt-1">{{ errorText }}</p>
  </div>
</template>

<script>
/**
 * TextField component
 * @component
 * @prop {String} id - The id of the input field.
 * @prop {String} label - The label text for the input field.
 * @prop {String} type - The type of the input field. Options are `text`, `number`, `password`, `search`.
 * @prop {String} placeholder - The placeholder text for the input field.
 * @prop {Boolean} isDisabled - If true, the input field will be disabled.
 * @prop {String} helperText - Helper text displayed below the input field.
 * @prop {String} errorText - Error text displayed below the input field when validation fails.
 * @prop {Boolean} showError - If true, the error text will be displayed.
 * @prop {Boolean} isFullWidth - If true, the input field will take the full width of its container.
 * @prop {String} modelValue - The value of the input field.
 */
export default {
  name: 'TextField',
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ' '
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    helperText: {
      type: String,
      default: ''
    },
    errorText: {
      type: String,
      default: ''
    },
    showError: {
      type: Boolean,
      default: false
    },
    isFullWidth: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isFocused: false,
    };
  },
  computed: {
    containerClasses() {
      return {
        'w-full': this.isFullWidth,
        'w-auto': !this.isFullWidth
      };
    },
    labelClasses() {
      return [
        'absolute left-0 top-1/2 transform -translate-y-1 text-gray-500 transition-all duration-200 ease-in-out pointer-events-none',
        'peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:-translate-y-6 peer-focus:scale-75'
      ];
    },
    inputClasses() {
      return [
        'mt-1 block w-full border-b-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-0 peer',
        this.isDisabled ? 'bg-gray-200 cursor-not-allowed' : 'bg-white',
        this.showError ? 'border-red-500 text-red-600' : 'border-gray-300 text-black',
        'rounded-t-md px-3 py-2 focus:outline-none',
      ];
    }
  },
  methods: {
    onInput(event) {
      this.$emit('update:modelValue', event.target.value);
      this.$emit('input', event);
    },
    onFocus() {
      this.isFocused = true;
    },
    onBlur(event) {
      this.isFocused = false;
      this.$emit('blur', event);
    }
  }
};
</script>

<style scoped>
/* Custom styles for the focus state and label alignment */
.focus\:ring-0:focus {
  outline: none;
  box-shadow: none;
}
</style>
