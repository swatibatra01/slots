import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource);

//Filters

Vue.filter('to-uppercase',function(value){
      return value.toUpperCase();
});

Vue.filter('snippet',function(value){
      return value.slice(0,100)+'...';
});

// Global (as it is declared in main.js) custom directive  
//(as it is global all components can use it).

Vue.directive('rainbow',{
	bind(el,binding,vnode){
      el.style.color="#"+Math.random().toString().slice(2,8);
	}
});

Vue.directive('theme',{
	bind(el,binding,vnode){
      if(binding.value == 'wide'){
         el.style.maxWidth='1200px';
      }else if(binding.value == 'narrow'){
         el.style.maxWidth='560px';
      }
      if(binding.arg == 'column'){
      	el.style.background='#ddd';
      }
	}
});

Vue.config.productionTip = false






/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
