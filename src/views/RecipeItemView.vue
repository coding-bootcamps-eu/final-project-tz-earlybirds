<template>
  <h1>{{ recipe.title }}</h1>
  <div class="recipe-item">
    <h2>Kraftpaket</h2>
    <p>{{ recipe.kraftpaket }}</p>
    <h2>Denkfutter</h2>
    <p>{{ recipe.denkfutter }}</p>
    <h2>Buntes Allerlei</h2>
    <p>{{ recipe.buntes }}</p>
    <h2>Zusatzinfos</h2>
    <p>{{ recipe.zusatzinfos }}</p>

    <div class="filter-tags">
      <FilterTags :tags="recipe.tags"></FilterTags>
    </div>
  </div>
</template>

<style scoped>
.recipe-item {
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
}

.filter-tags {
  display: flex;
  flex-wrap: wrap;
  margin: 5% 15%;
}
</style>

<script>
import FilterTags from "@/components/TagsFilter.vue";
const urlBase = "https://23-tz-general-earlybirds.api.cbe.uber.space/recipes/";
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
