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
        <div class="grid-wrapper">
          <div>
            <label for="kraftpaket">Kraftpaket</label>

            <input
              v-model="recipe.kraftpaket"
              type="text"
              id="kraftpaket"
              name="kraftpaket"
              placeholder="Kohlenhydrate wie Kartoffeln, Pasta, Reis..."
            />
          </div>
          <button
            type="button"
            class="info-button"
            @click="$refs.kraftpaket.showModal()"
          >
            <span class="visually-hidden">Was bedeutet Kraftpaket?</span>

            <img src="../assets/info.svg" />
          </button>
        </div>
        <div class="grid-wrapper">
          <div>
            <label for="denkfutter">Denkfutter</label>
            <input
              v-model="recipe.denkfutter"
              type="text"
              id="denkfutter"
              name="denkfutter"
              placeholder="Proteinreiches wie Ei, Fleisch, Fisch, Linsen"
            />
          </div>
          <button
            type="button"
            class="info-button"
            @click="$refs.denkfutter.showModal()"
          >
            <span class="visually-hidden">Was bedeutet Denkfutter?</span>
            <img src="../assets/info.svg" />
          </button>
        </div>
        <div class="grid-wrapper">
          <div>
            <label for="buntes">Buntes Allerlei</label>
            <input
              v-model="recipe.buntes"
              type="text"
              id="buntes"
              name="buntes"
              placeholder="Obst und Gemüse"
            />
          </div>
          <button
            type="button"
            class="info-button"
            @click="$refs.buntes.showModal()"
          >
            <span class="visually-hidden">Was bedeutet Buntes Allerlei?</span>
            <img src="../assets/info.svg" />
          </button>
        </div>
        <div>
          <label for="infos">Zusatzinfos</label>
          <input
            v-model="recipe.zusatzinfos"
            type="text"
            id="infos"
            name="infos"
            placeholder="Platz für Notizen"
          />
        </div>
        <FilterTags
          id="filter-tags"
          :tags="recipe.tags"
          @update:tags="onTagsUpdate($event)"
        ></FilterTags>
      </div>
      <div class="button-wrapper">
        <button class="basic-button" type="submit">Speichern</button>
        <button class="basic-button" type="reset">Reset</button>
      </div>
    </form>

    <dialog ref="kraftpaket">
      <div>
        <strong>Kohlenhydrate</strong> sind echte Kraftpakete! Das machen sie
        ganz schnell, aber auch lanfristig. Zuckerbausteine aus deinem Essen
        werden aus dem Mund schon direkt ins Blut übergehen. Damit du auch lange
        von der Energie zehren kannst, nimm am besten Vollkornprodukte, denn die
        brauchen etwas Zeit bis sie aufgespalten sind und ins Blut wandern.
      </div>
      <button @click="$refs.kraftpaket.close()">close</button>
    </dialog>
    <dialog ref="denkfutter">
      <div>
        <strong>Eiweiße</strong> gehören zu unserem Denkfutter! Denn sie bringen
        ganz automatisch Fette, Mineralstoffe und Vitamine mit, die wir für ein
        leistungsstarkes Gehirn brauchen. Eine gute Auswahl macht dich außerdem
        satt und glücklich.
      </div>

      <button @click="$refs.denkfutter.close()">close</button>
    </dialog>
    <dialog ref="buntes">
      <div>
        <strong>Obst und Gemüse</strong> bilden ein buntes Allerlei! Je mehr
        verschiedene Farben auf deinem Teller, umso besser. Abwechslungreich
        darf es sein, aber mach dir keinen Stress. Eine schnelle Portion Rohkost
        ist immer eine praktische Möglichkeit um hier zu punkten.
      </div>
      <button @click="$refs.buntes.close()">close</button>
    </dialog>
  </div>
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
  width: 70%;
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
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
}
.grid-wrapper {
  display: grid;
  grid-template-columns: 15fr 1fr;
  gap: 2rem;
}
img {
  cursor: pointer;
}
.info-button {
  border: none;
}
#filter-tags {
  margin-block: 2rem;
}
dialog {
  width: 70%;
}
button {
  margin: 0;
}
.button-wrapper {
  display: flex;
  justify-content: space-between;
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
      await fetch("http://localhost:3017/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.recipe),
      });
      this.recipe = { ...emptyRecipe };
    },
    /*openInfo() {
      this.$refs.modal.showModal();
    },
    closeInfo() {
      this.$refs.modal.close();
    },*/
    onTagsUpdate(newValue) {
      this.recipe.tags = newValue;
    },
  },
};
</script>
