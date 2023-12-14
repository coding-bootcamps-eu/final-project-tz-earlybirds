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
          id="details"
          :to="{
            name: 'recipeItem',
            params: { id: recipe.id },
          }"
        >
          <img src="../assets/menu.svg" alt="" />
        </router-link>
      </li>
    </ul>
    <router-link id="new-recipe-button" class="basic-button" to="/recipe-input"
      >+ neues Rezept</router-link
    >
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  margin-inline: 4rem;
  color: var(--color-blue);
}

li {
  display: flex;
  border-bottom: 2px solid var(--color-blue);
  padding-block: 0.5rem;
  justify-content: space-between;
  padding-right: 0.5rem;
}
#new-recipe-button {
  justify-content: flex-start;
  align-self: flex-start;
}
.basic-button {
  margin-block: 1rem;
  margin-inline: 0;
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
