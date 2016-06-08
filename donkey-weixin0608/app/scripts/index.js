import Vue from 'vue'
new Vue({
  el: 'body',
  data: ()=> {
    return {
      currentView: 'home',
      params: {}
    };
  },
  components: {
    home: require('./components/home.vue'),
  }
});
