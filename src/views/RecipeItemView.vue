<template>
  <div>
    <h1>Titel {{ $route.params.id }}</h1>
    <h2>Kraftpaket</h2>
    <h2>Denkfutter</h2>
    <h2>Buntes Allerlei</h2>
    <h3>Zusatzinfos</h3>
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
      recipes: [],
    };
  },
  async created() {
    const response = await fetch(urlBase + this.$route.params.id);
    const data = await response.json();
    this.recipes = data;
  },
};
</script>
