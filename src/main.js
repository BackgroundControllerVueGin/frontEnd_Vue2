// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import "./utils/element.js";
/*---------引入粒子背景特效(在login页面里显示)-----------*/
import VueParticles from "vue-particles";
Vue.use(VueParticles);
/*--------------------------*/
Vue.config.productionTip = false;
axios.defaults.withCredentials = true;
/* eslint-disable no-new */
Vue.use(VueAxios, axios);
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
