<template>
  <HeaderLayout />
</template>
<script>
import HeaderLayout from "@/layouts/HeaderLayout.vue";
export default {
  components: {
    HeaderLayout,
  },
};
</script>
<style>
@import url("./assets/reset.css");
@import url("./assets/basic.css");
@import url("https://fonts.googleapis.com/css2?family=Limelight&family=Poppins:wght@600&display=swap");

#app {
  font-family: "Poppins", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: var(--color-orange);
}
</style>
