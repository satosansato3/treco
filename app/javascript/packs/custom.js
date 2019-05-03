import Vue from 'vue/dist/vue.esm'

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({
  el: "#app-2",
  data: {
    message: new Date().toLocaleString()
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app3 = new Vue({
  el: "#app-3",
  data: {
    seen: false
  }
})

var app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [
      { text: "hoge1", foo: "bar1" },
      { text: "hoge2", foo: "bar2" },
      { text: "hoge3", foo: "bar3" }
      ]
  }
})

var app6 = new Vue({
  el: "#app-6",
  data: {
    message: "hogehoge"
  }
})

Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>"
})

var app7 = new Vue({
  el: "#app-7",
  data: {
    groceryList: [
      { id: 0, text: "Vegetables"},
      { id: 1, text: "Cheese"},
      { id: 2, text: "eatttt"}]
  }
})

var app8 = new Vue({
  el: "#app-8",
  data: {
    groceryList1: [
      { id: 0, text: "Vegetables1"},
      { id: 1, text: "Cheese1"},
      { id: 2, text: "eatttt1"}]
  }
})