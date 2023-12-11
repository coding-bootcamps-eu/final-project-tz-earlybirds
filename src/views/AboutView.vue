<template>
  <div class="about">
    <h1>Was essen wir heute?</h1>
    <h2>
      Wenn dich diese Frage genauso nervt wie uns, dann sagen wir gemeinsam:
    </h2>
    <h2>Schluss aus, (heute mal keine) Pasta!</h2>
    <p>
      Denn mit dieser App hast du die Möglichkeit, deine ganz persönliche
      Bibliothek mit Gerichten zu füllen die dir und deiner Familie schmecken.
      Eigentlich gibt es sie in jedem Haushalt, die Rezepte die gut klappen,
      gerne gegessen werden und schnell gemacht sind. Aber welche waren das
      nochmal?
    </p>
    <h2>Das sind wir:</h2>
    <div class="pictureframe">
      <div>
        <img src="../assets/womanShortHair.png" alt="Woman with short Hair" />
        <h3>Patricia</h3>
      </div>
      <div>
        <img
          src="../assets/woman shoulderHair.png"
          alt="Woman with shoulderlong Hair"
        />
        <h3>Maike</h3>
      </div>
      <div>
        <img src="../assets/woman longHair.png" alt="Woman with long Hair" />
        <h3>Paula</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  margin: 2rem;
  padding: 2rem;
}
h1 {
  margin: 2rem;
}
img {
  height: 90px;
  width: 90px;
  padding: 3rem;
}
.pictureframe {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
@media (max-width: 745px) {
  .pictureframe {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
