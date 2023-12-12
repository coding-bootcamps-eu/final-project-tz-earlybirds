<template>
  <div class="flex-wrapper">
    <h1>Plane deine Woche</h1>
    <button @click="threeDayPlan" class="basic-button">3 Tage</button>
    <ul>
      <li v-for="recipe in threeDayRecipes" :key="recipe.id">
        {{ recipe.title }}
      </li>
    </ul>
    <button @click="fiveDayPlan" class="basic-button">5 Tage</button>
    <ul>
      <li v-for="recipe in fiveDayRecipes" :key="recipe.id">
        {{ recipe.title }}
      </li>
    </ul>
    <button @click="sevenDayPlan" class="basic-button">7 Tage</button>
    <ul>
      <li v-for="recipe in sevenDayRecipes" :key="recipe.id">
        {{ recipe.title }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.flex-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  gap: 2rem;
}
</style>

<script>
// @ is an alias to /src
export default {
  name: "MealplanView",
  components: {},
  data() {
    return {
      recipes: [],
      threeDayRecipes: [],
      fiveDayRecipes: [],
      sevenDayRecipes: [],
    };
  },
  created() {
    this.showRecipes();
  },
  methods: {
    async showRecipes() {
      const response = await fetch("http://localhost:3017/recipes");
      const data = await response.json();
      this.recipes = data;
    },
    click() {
      console.log("click");
    },
    threeDayPlan() {
      const threeDays = this.recipes.sort(() => 0.5 - Math.random());
      this.threeDayRecipes = threeDays.slice(0, 3);
    },
    fiveDayPlan() {
      const fiveDays = this.recipes.sort(() => 0.5 - Math.random());
      this.fiveDayRecipes = fiveDays.slice(0, 5);
    },
    sevenDayPlan() {
      const sevenDays = this.recipes.sort(() => 0.5 - Math.random());
      this.sevenDayRecipes = sevenDays.slice(0, 7);
    },
  },
};
</script>
