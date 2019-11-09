// Vue
import Vue from "vue";
Vue.config.productionTip = false;

// Buefy
import Buefy from "buefy";
import "buefy/dist/buefy.css";
Vue.use(Buefy);

// Router
import Router from "vue-router";
Vue.use(Router);

function loadView(view) {
  return () => import(`./views/${view}.vue`);
}

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: loadView("Home"),
      meta: {
        title: "หน้าหลัก"
      }
    },
    {
      path: "/about",
      name: "about",
      component: loadView("About"),
      meta: {
        title: "เกี่ยวกับ"
      }
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});

// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
  const customTitle = to.matched
    .slice()
    .reverse()
    .find(record => record.meta && record.meta.title);
  document.title = `✅ E-choice : ${customTitle ? customTitle.meta.title : ""}`;
  next();
});

// PWA
import "./registerServiceWorker";

// App
import App from "./App.vue";
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
