<template>
  <div class="recipe-input">
    <form>
      <label for="recipename">Name des Gerichts:</label>
      <input type="text" placeholder="Trage hier deinen Rezeptnamen ein" />

      <p class="further-info">
        Jedes gute Gericht besteht aus verschiedenen Bausteinen, die zusammen
        eine tolle Familienmahlzeit bilden, dazu brauchst du:
      </p>
      <label for="kraftpaket">Kraftpaket</label>
      <input
        type="text"
        id="kraftpaket"
        name="kraftpaket"
        placeholder="Kohelnhydrate wie Kartoffeln, Pasta, Reis..."
      />
      <button class="info-button">Info</button>
      <label for="denkfutter">Denkfutter</label>
      <input
        type="text"
        id="denkfutter"
        name="denkfutter"
        placeholder="Proteinreiches wie Ei, Fleisch, Fisch, Linsen"
      />
      <button>Info</button>
      <label for="buntes">Buntes Allerlei</label>
      <input
        type="text"
        id="buntes"
        name="buntes"
        placeholder="Obst und Gemüse"
      />
      <button class="info-button">Info</button>
      <label for="infos">Zusatzinfos</label>
      <input
        type="text"
        id="infos"
        name="infos"
        placeholder="Platz für Notizen"
      />
      <button class="info-button">Info</button>
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
  margin-top: 0.5rem;
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
</style>
<script>
// @ is an alias to /src
</script>
