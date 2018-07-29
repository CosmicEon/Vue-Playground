Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

const app = new Vue({
  el: '#app',
  data: {
    text: 'Hello Vue.js!',
    message: 'You loaded this page on ' + new Date().toLocaleString(),
    seen: true,
    cars: [
      { brand: 'Audi', model: 'A3', },
      { brand: 'BMW', model: '3 series', },
      { brand: 'Mercedes', model: 'C-class', },
      { brand: 'VW', model: 'Golf', },
    ],
    reverseText: 'Hello Vue.js!',
    inputText: 'Hello Vue!',
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ],
    isActive: true,
    hasError: false,
  },
  methods: {
    reverseMessage: function() {
      this.reverseText = this.reverseText.split('').reverse().join('');
    },
  },
  computed: {
    classObject: function() {
      return {
        example: this.isActive && !this.hasError,
        'text-danger': this.hasError && this.hasError.type === 'fatal'
      };
    },
  },
})

export default app;