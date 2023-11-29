<template>
  <div class="home">
    <button><router-link to="/recipes">Rezepte</router-link></button>
    <button><router-link to="/planing">Planung</router-link></button>
  </div>
</template>

<script>
// @ is an alias to /src
</script>
<style scoped>
.home {
  display: flex;
  padding-top: 5rem;
  gap: 1rem;

  align-items: center;
  justify-content: center;
}
</style>
