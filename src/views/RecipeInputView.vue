<template>
  <div class="recipe-input">
    <form>
      <label for="recipename">Name</label>
      <input type="text" />
      <p>
        Jedes gute Gericht besteht aus verschiedenen Bausteinen, die zusammen
        eine tolle Familienmahlzeit bilden, dazu brauchst du:
      </p>
      <label for="kraftpaket">Kraftpaket</label>
      <input type="text" id="kraftpaket" name="kraftpaket" />
      <button>Info</button>
      <label for="denkfutter">Denkfutter</label>
      <input type="text" id="denkfutter" name="denkfutter" />
      <button>Info</button>
      <label for="buntes">Buntes Allerlei</label>
      <input type="text" id="buntes" name="buntes" />
      <button>Info</button>
      <label for="infos">Zusatzinfos</label>
      <input type="text" id="infos" name="infos" />
      <button>Info</button>
    </form>
  </div>
  <ul>
    <li v-for="recipe in recipes" :key="recipe.id">{{ recipe.title }}</li>
  </ul>
</template>

<script>
// @ is an alias to /src
</script>
