import Vue from "vue";
import VueRouter from "vue-router";
import { Button } from "ant-design-vue";
import App from "./App.vue";
import routes from "./routes";
// import "ant-design-vue/dist/antd.less";

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(VueRouter);

const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
