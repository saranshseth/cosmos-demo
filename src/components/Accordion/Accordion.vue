<template>
  <div :class="accordionClasses">
    <div class="accordion-controls flex justify-between items-center p-4 border-b border-grey-light">
      <h2 class="text-xl font-semibold">{{ title }}</h2>
      <button @click="toggleAll" class="text-sm font-medium">{{ allOpen ? 'Hide all' : 'Show all' }}</button>
    </div>
    <div v-for="(item, index) in items" :key="index" :class="itemClasses">
      <div @click="toggle(index)"
        :class="['accordion-header flex justify-between items-center cursor-pointer p-4', isOpen(index) ? 'bg-grey-lighter' : 'border-b border-grey-light']"
        :aria-expanded="isOpen(index)" role="button" tabindex="0" @keydown.enter="toggle(index)"
        @keydown.space="toggle(index)">
        <h3 :class="headerClasses">{{ item.title }}</h3>
        <span :class="chevronClasses">{{ isOpen(index) ? '▲' : '▼' }}</span>
      </div>
      <transition name="accordion">
        <div v-show="isOpen(index)" class="accordion-content p-4 px-6 border-b border-grey-light" role="region">
          <slot :name="`content-${index}`">{{ item.content }}</slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  props: {
    items: {
      type: Array,
      required: true
    },
    variant: {
      type: String,
      default: 'default' // default, bordered, highlighted, collapsible
    },
    title: {
      type: String,
      default: 'Accordion'
    }
  },
  data() {
    return {
      openIndex: [],
      allOpen: false
    };
  },
  computed: {
    accordionClasses() {
      return [
        'accordion',
        this.variantClasses
      ];
    },
    itemClasses() {
      return [
        'accordion-item',
        'transition-all',
        'duration-300',
        'ease-in-out'
      ];
    },
    headerClasses() {
      return [
        'accordion-header',
        'font-semibold'
      ];
    },
    chevronClasses() {
      return [
        'accordion-chevron',
        'text-xl',
        'transition-transform'
      ];
    },
    variantClasses() {
      return {
        default: '',
        bordered: 'border border-grey-light',
        highlighted: 'bg-grey-lighter text-midnight',
        collapsible: 'bg-white text-midnight'
      }[this.variant] || '';
    }
  },
  methods: {
    toggle(index) {
      if (this.openIndex.includes(index)) {
        this.openIndex = this.openIndex.filter(i => i !== index);
      } else {
        this.openIndex.push(index);
      }
    },
    isOpen(index) {
      return this.openIndex.includes(index);
    },
    toggleAll() {
      if (this.allOpen) {
        this.openIndex = [];
      } else {
        this.openIndex = this.items.map((_, index) => index);
      }
      this.allOpen = !this.allOpen;
    }
  }
};
</script>

<style scoped>
.accordion-item:hover {
  @apply bg-grey-lighter-alpha;
}
</style>
