<template>
  <div class="recipe-input">
    <form @submit.prevent="addRecipe">
      <label for="recipename">Name des Gerichts:</label>
      <input
        v-model="recipe.title"
        type="text"
        placeholder="Trage hier deinen Rezeptnamen ein"
      />

      <p class="further-info">
        Jedes gute Gericht besteht aus verschiedenen Bausteinen, die zusammen
        eine tolle Familienmahlzeit bilden, dazu brauchst du:
      </p>
      <div class="flex-wrapper">
        <label for="kraftpaket">Kraftpaket</label>
        <img src="../assets/info.svg" />
        <input
          v-model="recipe.kraftpaket"
          type="text"
          id="kraftpaket"
          name="kraftpaket"
          placeholder="Kohlenhydrate wie Kartoffeln, Pasta, Reis..."
        />
        <label for="denkfutter">Denkfutter</label>
        <img src="../assets/info.svg" />
        <input
          v-model="recipe.denkfutter"
          type="text"
          id="denkfutter"
          name="denkfutter"
          placeholder="Proteinreiches wie Ei, Fleisch, Fisch, Linsen"
        />

        <label for="buntes">Buntes Allerlei</label>
        <img src="../assets/info.svg" />
        <input
          v-model="recipe.buntes"
          type="text"
          id="buntes"
          name="buntes"
          placeholder="Obst und Gemüse"
        />
        <label for="infos">Zusatzinfos</label> <img src="../assets/info.svg" />
        <input
          v-model="recipe.zusatzinfos"
          type="text"
          id="infos"
          name="infos"
          placeholder="Platz für Notizen"
        />
      </div>
      <div>
        <label>
          <input
            v-model="recipe.tags"
            type="checkbox"
            name="tags"
            value="warm"
          />warm
        </label>
        <label>
          <input
            v-model="recipe.tags"
            type="checkbox"
            name="tags"
            value="kalt"
          />kalt
        </label>
        <label>
          <input
            v-model="recipe.tags"
            type="checkbox"
            name="tags"
            value="süß"
          />süß
        </label>
        <label>
          <input
            v-model="recipe.tags"
            type="checkbox"
            name="tags"
            value="herzhaft"
          />herzhaft
        </label>
      </div>
      <button class="basic-button" type="submit">Speichern</button>
      <button class="basic-button" type="reset">Reset</button>
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
img {
  cursor: pointer;
}
</style>
<script>
const emptyRecipe = {
  title: "",
  kraftpaket: "",
  denkfutter: "",
  buntes: "",
  zusatzinfos: "",
  tags: [],
};
// 1.Schritt: Eingabefelder als data properties hinterlegen
// 2.Schritt: bei submit über v-model eingabe überschreiben
// 2,a : ggf. Prüfung einführen (z.B.: required)
// 3.Schritt: State der API mit Eingabe befüllen
//4. Schritt: data property wieder leeren
export default {
  name: "RecipeInputView",
  data() {
    return {
      recipes: [],
      recipe: {
        ...emptyRecipe, //checkboxes mit versch. values; das was angeklickt wird, kommt ins array. Checkbox braucht attribut name mit Titel tag, alle mit gleichem name attribut kommen in ein array.
      },
    };
  },
  methods: {
    async addRecipe() {
      await fetch("http://localhost:3017/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.recipe),
      });
      this.recipe = { ...emptyRecipe }; //spread-operator, spaltet auf und befüllt mit gleichen attributen und werten
      console.log(this.recipe);
    },
  },
};
</script>
