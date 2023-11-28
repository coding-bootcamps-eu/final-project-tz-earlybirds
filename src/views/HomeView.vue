<template>
  <div class="home"></div>
  <ul>
    <li v-for="recipe in recipes" :key="recipe.id">{{ recipe.title }}</li>
  </ul>
</template>

<script>
// @ is an alias to /src
</script>
