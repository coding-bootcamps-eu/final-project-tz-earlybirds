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

        <input
          v-model="recipe.kraftpaket"
          type="text"
          id="kraftpaket"
          name="kraftpaket"
          placeholder="Kohlenhydrate wie Kartoffeln, Pasta, Reis..."
        />
        <label for="denkfutter">Denkfutter</label>
        <input
          v-model="recipe.denkfutter"
          type="text"
          id="denkfutter"
          name="denkfutter"
          placeholder="Proteinreiches wie Ei, Fleisch, Fisch, Linsen"
        />

        <label for="buntes">Buntes Allerlei</label>
        <input
          v-model="recipe.buntes"
          type="text"
          id="buntes"
          name="buntes"
          placeholder="Obst und Gemüse"
        />
        <label for="infos">Zusatzinfos</label>
        <input
          v-model="recipe.zusatzinfos"
          type="text"
          id="infos"
          name="infos"
          placeholder="Platz für Notizen"
        />
        <FilterTags
          :tags="recipe.tags"
          @update:tags="(newValue) => (recipe.tags = newValue)"
        ></FilterTags>
      </div>

      <button class="basic-button" type="submit">Speichern</button>
      <button class="basic-button" type="reset">Reset</button>
    </form>
    <button class="info-button" @click="openInfo">
      <img src="../assets/info.svg" />
    </button>
    <dialog id="data-modal">
      <div>
        <strong>Kohlenhydrate</strong> sind echte Kraftpakete! Das machen sie
        ganz schnell, aber auch lanfristig. Zuckerbausteine aus deinem Essen
        werden aus dem Mund schon direkt ins Blut übergehen. Damit du auch lange
        von der Energie zehren kannst, nimm am besten Vollkornprodukte, denn die
        brauchen etwas Zeit bis sie aufgespalten sind und ins Blut wandern.
      </div>
      <div>
        <strong>Eiweiße</strong> gehören zu unserem Denkfutter! Denn sie bringen
        ganz automatisch Fette, Mineralstoffe und Vitamine mit, die wir für ein
        leistungsstarkes Gehirn brauchen. Eine gute Auswahl macht dich außerdem
        satt und glücklich.
      </div>
      <div>
        <strong>Obst und Gemüse</strong> bilden ein buntes Allerlei! Je mehr
        verschiedene Farben auf deinem Teller, umso besser. Abwechslungreich
        darf es sein, aber mach dir keinen Stress. Eine schnelle Portion Rohkost
        ist immer eine praktische Möglichkeit um hier zu punkten.
      </div>
      <button @click="closeInfo">close</button>
    </dialog>
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
.info-button {
  border: none;
}
</style>
<script>
import FilterTags from "../components/FilterTags.vue";

const emptyRecipe = {
  title: "",
  kraftpaket: "",
  denkfutter: "",
  buntes: "",
  zusatzinfos: "",
  tags: [],
};

export default {
  name: "RecipeInputView",
  data() {
    return {
      recipes: [],
      recipe: {
        ...emptyRecipe,
      },
    };
  },
  components: {
    FilterTags,
  },

  methods: {
    async addRecipe() {
      // prettier ignore
      await fetch("http://localhost:3017/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.recipe),
      });
      this.recipe = { ...emptyRecipe };
      console.log(this.recipe);
    },
    openInfo() {
      const modal = document.querySelector("#data-modal");
      return modal.showModal();
    },
    closeInfo() {
      const modal = document.querySelector("#data-modal");
      return modal.close();
    },
  },
};
</script>
