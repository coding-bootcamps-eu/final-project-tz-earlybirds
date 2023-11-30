<template>
  <div class="home">
    <h1>Schluss aus, Pasta <span>!</span></h1>
    <div class="button-container">
      <button class="button-pasta" id="left-pasta">
        <router-link to="/recipes" class="button-font">Rezepte</router-link>
      </button>
      <button class="button-pasta" id="pasta-middle"></button>
      <button class="button-pasta" id="right-pasta">
        <router-link to="/planing" class="button-font">Planung</router-link>
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Limelight&display=swap");

.home {
  height: 100vh;
  background-color: var(--color-beige);
  padding-inline: 2rem;
}
h1 {
  font-family: "Limelight", sans-serif;
  font-size: 96px;
  color: var(--color-blue);
  text-align: end;
  padding-top: 40vh;
  margin-bottom: 4rem;
}
span {
  color: var(--color-orange);
}
.button-container {
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
}
.button-pasta {
  background: var(--color-orange);
  border: none;
  font-size: 1.25rem;
}
#left-pasta {
  border-radius: 10px 70px 10px 70px;
  padding-top: 3rem;
  padding-left: 7rem;
}
#pasta-middle {
  align-self: center;
  border-radius: 10px 70px 10px 70px;
  margin-block: 1.2rem;
  padding-block: 2rem;
  padding-inline: 4rem;
}
#right-pasta {
  border-radius: 10px 70px 10px 70px;
  padding-bottom: 3rem;
  padding-right: 7rem;
}
.button-font {
  color: var(--color-beige);
  padding-inline: 0.5rem;
}
</style>
