<template>
  <div class="home">
    <FilterTags
      :tags="selectedTags"
      @update:tags="onTagsUpdate($event)"
    ></FilterTags>
    <ul>
      <li
        v-for="recipe in filteredRecipes"
        :key="recipe.id"
        :id="recipe.id"
        :title="recipe.title"
      >
        <router-link
          id="item-link"
          :to="{
            name: 'recipeItem',
            params: { id: recipe.id },
          }"
        >
          {{ recipe.title }}
        </router-link>
        <div class="icons-container">
          <router-link
            id="details"
            :to="{
              name: 'recipeItem',
              params: { id: recipe.id },
            }"
          >
            <span class="visually-hidden">Link zur Detailseite</span>
            <img
              id="details-router"
              src="../assets/menu.svg"
              alt="details icon"
            />
          </router-link>
          <button
            type="button"
            id="delete-button"
            @click="deleteRecipe(recipe.id)"
          >
            <span class="visually-hidden">Rezept löschen</span>
            <img id="trash" src="../assets/trash.svg" alt="trash icon" />
          </button>
        </div>
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
  color: var(--color-blue);
}
#item-link {
  color: inherit;
}
li {
  display: flex;
  border-bottom: 2px solid var(--color-blue);
  padding-block: 0.5rem;
  justify-content: space-between;
  align-items: baseline;
  padding-right: 0.5rem;
}
.icons-container {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

#delete-button {
  border: none;
}
#delete-button:hover {
  border: dashed 0.5px var(--color-orange);
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
import FilterTags from "@/components/FilterTags.vue";
export default {
  name: "RecipeView",
  components: {
    FilterTags,
  },
  props: {
    title: String,
    id: Number,
  },
  data() {
    return {
      recipes: [],
      selectedTags: [],
    };
  },
  computed: {
    filteredRecipes() {
      return this.recipes.filter((recipe) => {
        const intersection = recipe.tags.filter((tag) =>
          this.selectedTags.includes(tag)
        );

        return intersection.length === this.selectedTags.length;
      });
    },
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

    deleteRecipe(id) {
      const baseUrl = "http://localhost:3017/recipes/";

      fetch(baseUrl + id, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => {
          this.fetchRecipes();
        });
    },
    onTagsUpdate(newValue) {
      this.selectedTags = newValue;
    },
  },
};
</script>
