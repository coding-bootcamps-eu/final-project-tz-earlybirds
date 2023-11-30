<template>
  <nav>
    <router-link class="header-link" to="/">Home</router-link>
    <router-link class="header-link" to="/recipes">Rezepte</router-link>
    <router-link class="header-link" to="/planing">Planung</router-link>
    <router-link class="header-link" to="/about">About</router-link>
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
.header-link {
  font-weight: 400;
  color: var(--color-blue);
}
</style>
