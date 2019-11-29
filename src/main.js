// Vue
import Vue from "vue";
Vue.config.productionTip = false;

// Buefy
import Buefy from "buefy";
Vue.use(Buefy, {
  defaultIconPack: "fa"
});

// Router
import Router from "vue-router";
Vue.use(Router);

function loadView(view) {
  return () => import(`./views/${view}.vue`);
}

const router = new Router({
  mode: "history",
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
      path: "/personality",
      name: "personality",
      component: loadView("Personality"),
      meta: {
        title: "คุณมีบุคลิกแบบใด?"
      }
    },
    {
      path: "/result/:type",
      name: "result",
      component: loadView("Result"),
      meta: {
        title: "คุณคือ..."
      }
    },
    {
      path: "/job",
      name: "job",
      component: loadView("Joblist"),
      meta: {
        title: "ข้อมูลอาชีพ"
      }
    },
    {
      path: "/job/:name",
      name: "job",
      component: loadView("Job"),
      meta: {
        title: "..."
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
  document.title = `E-choice - ${customTitle ? customTitle.meta.title : ""}`;
  next();
});

// Analytics
import VueAnalytics from "vue-analytics";
Vue.use(VueAnalytics, {
  id: "UA-118881298-5",
  router
});

// Smooth scroll fallback
import smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();

// App
import App from "./App.vue";
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
