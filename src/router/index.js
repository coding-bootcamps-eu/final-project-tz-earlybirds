import { createRouter, createWebHistory } from "vue-router";
import RecipesView from "../views/RecipesView.vue";
import HomeView from "../views/HomeView.vue";
import MealplanView from "../views/MealplanView.vue";
import RecipeInputView from "../views/RecipeInputView";
import RecipeItemView from "../views/RecipeItemView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/recipes",
    name: "recipes",
    component: RecipesView,
  },

  {
    path: "/planing",
    name: "planing",
    component: MealplanView,
  },
  {
    path: "/recipe-input",
    name: "recipeInput",
    component: RecipeInputView,
  },
  {
    path: "/about",
    name: "about",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/recipes/:id",
    name: "recipeItem",
    component: RecipeItemView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
