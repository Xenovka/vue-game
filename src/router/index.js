import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import GameDetailsPage from "../views/GameDetailsPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/details/:gameId",
    name: "GameDetails",
    component: GameDetailsPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
