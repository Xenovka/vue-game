import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import GameDetails from "../views/GameDetails.vue";
import GameByGenre from "../views/GameByGenre.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/d/:gameSlug",
    name: "GameDetails",
    component: GameDetails
  },
  {
    path: "/g/:genre",
    name: "GameByGenre",
    component: GameByGenre
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
