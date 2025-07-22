import { createRouter, createWebHistory } from "vue-router";

import { createApp } from "vue";
import App from "../App.vue";

import HomePage from "../components/screens/HomePage.vue";
import NotFoundPage from "../components/error/NotFoundPage.vue";
import TechnologiesPage from '../components/screens/Technologies/TechnologiesPage.vue'
import PortfolioPage from '../components/screens/PortfolioPage.vue'

export function RouterHub() {
    const router = createRouter({
        routes: [
          {
            path: "/",
            name: "home",
            component: HomePage,
          },
          {
            path: "/:pathMath(.*)*",
            name: "404",
            component: NotFoundPage,
          },
          {
            path: '/technologies',
            name: 'technologies',
            component: TechnologiesPage
          },
          {
            path: '/portfolio',
            name: 'portfolio',
            component: PortfolioPage
          }
          
        ],
        history: createWebHistory(),
      });
      
      const isAuthenticated = false;
      
      router.beforeEach((to) => {
        if (to.meta.requiresAuth && !isAuthenticated) {
          return {
            name: "home",
          };
        }
      });

      //Создание App
      const app = createApp(App);
        app.use(router)
        app.mount("#app");
} 



