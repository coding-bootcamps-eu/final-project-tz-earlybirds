<template>
  <div class="recipe-input">
    <form>
      <label for="recipename">Name des Gerichts:</label>
      <input type="text" placeholder="Trage hier deinen Rezeptnamen ein" />

      <p class="further-info">
        Jedes gute Gericht besteht aus verschiedenen Bausteinen, die zusammen
        eine tolle Familienmahlzeit bilden, dazu brauchst du:
      </p>
      <div class="flex-wrapper">
        <label for="kraftpaket">Kraftpaket</label>
        <img src="../assets/info.svg" /><input
          type="text"
          id="kraftpaket"
          name="kraftpaket"
          placeholder="Kohelnhydrate wie Kartoffeln, Pasta, Reis..."
        />
        <label for="denkfutter">Denkfutter</label>
        <img src="../assets/info.svg" />
        <input
          type="text"
          id="denkfutter"
          name="denkfutter"
          placeholder="Proteinreiches wie Ei, Fleisch, Fisch, Linsen"
        />

        <label for="buntes">Buntes Allerlei</label>
        <img src="../assets/info.svg" />
        <input
          type="text"
          id="buntes"
          name="buntes"
          placeholder="Obst und Gemüse"
        />
        <label for="infos">Zusatzinfos</label> <img src="../assets/info.svg" />
        <input
          type="text"
          id="infos"
          name="infos"
          placeholder="Platz für Notizen"
        />
      </div>
      <button class="basic-button" type="sumbit">Speichern</button>
    </form>
  </div>
  <ul>
    <li v-for="recipe in recipes" :key="recipe.id">{{ recipe.title }}</li>
  </ul>
</template>
<style scoped>
.further-info {
  text-align: left;
  font-size: 16px;
}
.recipe-input {
  padding-top: 3rem;
  height: 100vh;
  background-color: var(--color-beige);
}
form {
  color: var(--color-blue);
  margin: auto;
  width: 50%;
}
label {
  font-family: "poppins" regular;
}
input {
  margin-top: 0.2rem;
  height: 2.5rem;
  width: 100%;
  background-color: var(--color-beige);
  border-radius: 12px;
  border: var(--color-blue) 0.5px solid;
}
input::placeholder {
  font-weight: 100;
}
#infos {
  padding-bottom: 3rem;
}

.flex-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1em;
}

/* (button {
  font-size: 24px;
  width: 8em;
  line-height: 56px;
  border-radius: 25px;
  background-color: var(--color-orange);
}) */
</style>
<script>
// @ is an alias to /src
</script>
