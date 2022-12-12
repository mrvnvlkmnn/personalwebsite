import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailView from '../views/DetailView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: '/ducati',
      name: 'ducatiPanigaleV2',
      component: DetailView,
    },
    {
      path: '/aarhus',
      name: 'Aarhus2022',
      component: DetailView
    }
  ],
});

export default router;
