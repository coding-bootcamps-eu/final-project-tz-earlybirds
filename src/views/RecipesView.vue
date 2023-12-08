<template>
  <div class="home">
    <ul>
      <li
        v-for="recipe in recipes"
        :key="recipe.id"
        :id="recipe.id"
        :title="recipe.title"
      >
        {{ recipe.title }}

        <router-link
          :to="{
            name: 'recipeItem',
            params: { id: recipe.id },
          }"
          >Details</router-link
        >
      </li>
    </ul>

    <router-link class="basic-button" to="/recipe-input"
      >neues Rezept</router-link
    >
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
}
</style>

<script>
// @ is an alias to /src

export default {
  name: "RecipeView",
  components: {},
  data() {
    return {
      recipes: [],
    };
  },
  props: {
    title: String,
    id: Number,
  },
  created() {
    this.fetchRecipes();
  },
  methods: {
    async fetchRecipes() {
      const response = await fetch("http://localhost:3017/recipes");
      const data = await response.json();
      this.recipes = data;
    },
  },
};
</script>
