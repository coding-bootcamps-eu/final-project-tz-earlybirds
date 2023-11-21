<template>
  <nav>
    <router-link to="/">Rezepte</router-link>
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>
<style scoped>
nav {
  background-color: var(--color-beige);
  display: flex;
  justify-content: end;
  gap: 2rem;
}
</style>
