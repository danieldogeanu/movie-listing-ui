import Vue from 'vue';
import App from './App.vue';
import browserDetect from 'vue-browser-detect-plugin';

Vue.config.productionTip = false;
Vue.use(browserDetect);

var vm = new Vue({
  render: h => h(App),
});

// If current browser is not IE, remove browserupgrade message.
(() => {
  const html = document.querySelector('html').classList;
  const browserupgrade = document.getElementById('browserupgrade');
  const browser = vm.$browserDetect;

  if (!browser.isIE) {
    if (html.contains('ie')) {
      html.remove('ie');
      html.add(browser.meta.name.toLowerCase());
      browserupgrade.remove();
      vm.$mount('#app');
    }
  }
})();
