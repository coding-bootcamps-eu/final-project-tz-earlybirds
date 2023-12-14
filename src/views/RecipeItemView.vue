<template>
  <div class="recipe-item">
    <h1>{{ recipe.title }}</h1>
    <h2>Kraftpaket</h2>
    <p>{{ recipe.kraftpaket }}</p>
    <h2>Denkfutter</h2>
    {{ recipe.denkfutter }}
    <h2>Buntes Allerlei</h2>
    {{ recipe.buntes }}
    <h2>Zusatzinfos</h2>
    {{ recipe.zusatzinfos }}

    <FilterTags :tags="recipe.tags"></FilterTags>
  </div>
</template>

<script>
import FilterTags from "@/components/FilterTags.vue";
const urlBase = "http://localhost:3017/recipes/";
export default {
  name: "RecipeItemView",
  components: {
    FilterTags,
  },
  data() {
    return {
      recipe: {},
    };
  },
  async created() {
    const response = await fetch(urlBase + this.$route.params.id);
    this.recipe = await response.json();
    console.log(this.recipe);
  },
};
</script>
