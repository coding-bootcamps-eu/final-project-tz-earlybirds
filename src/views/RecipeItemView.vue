<template>
  <div>
    <h1>{{ this.recipe.title }}</h1>
    <h2>Kraftpaket</h2>
    {{ this.recipe.kraftpaket }}
    <h2>Denkfutter</h2>
    {{ this.recipe.denkfutter }}
    <h2>Buntes Allerlei</h2>
    {{ this.recipe.buntes }}
    <h3>Zusatzinfos</h3>
    {{ this.recipe.zusatzinfos }}
    <div>Hier stehen die Tags</div>
  </div>
</template>

<script>
const urlBase = "http://localhost:3017/recipes/";
export default {
  name: "RecipeItemView",
  components: {},
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
