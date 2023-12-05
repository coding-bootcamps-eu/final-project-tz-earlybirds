<template>
  <nav class="flex-nav">
    <div>
      <img class="logo" src="../assets/logobird.svg" alt="logo" />
    </div>
    <div :data-visible="isMenuOpen">
      <ul
        id="primary-navigation"
        data-visible="false"
        class="primary-navigation flex"
      >
        <li><router-link class="header-link" to="/">Home</router-link></li>
        <li>
          <router-link class="header-link" to="/recipes">Rezepte</router-link>
        </li>
        <li>
          <router-link class="header-link" to="/planing">Planung</router-link>
        </li>
        <li>
          <router-link class="header-link" to="/about">About</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <button
    :aria-expanded="isMenuOpen"
    @click="isMenuOpen = !isMenuOpen"
    class="mobile-nav-toggle"
    aria-controls="primary-navigation"
  ></button>

  <router-view />
</template>
<style scoped>
nav {
  background-color: var(--color-beige);
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}
.header-link {
  font-weight: 400;
  color: var(--color-blue);
}
.flex {
  display: flex;
  gap: var(--gap, 1rem);
}

/*primary header */

.primary-header {
  align-items: center;
  justify-content: space-between;
}

.mobile-nav-toggle {
  display: none;
}

.primary-navigation {
  list-style: none;
  padding: 1rem;
  margin: 0;
  /*background: steelblue;*/
  background: var(--color-beige);
}
/* Filter der den Hintergrund durchscheinend sein lässt // wird nicht durch alle Browser unterstützt, daher @support fallback*/

@supports (backdrop-filter: blur(1rem)) {
  .primary-navigation {
    background: hsl (0 0% 100% / 0.1);
    backdrop-filter: blur(1rem);
  }
}

.primary-navigation a {
  text-decoration: none;
}

@media (max-width: 35em) {
  .primary-navigation {
    --gap: 3em;
    position: fixed;
    z-index: 1000;
    inset: 0 0 0 30%;
    flex-direction: column;
    padding: min(30vh, 10rem) 2rem;

    transform: translateX(100%);
    transition: transform 350ms ease-out;
  }

  .primary-navigation[data-visible="true"] {
    transform: translateX(0%);
  }

  .mobile-nav-toggle {
    display: block;
    position: absolute;
    z-index: 9999;
    background: url(../assets/hamburger.svg)
      /*url(mit Link zu Hamburger Icon aus der assets datei.svg); und background-image draus machen. dann noch background-color: transparent;*/;
    background-repeat: no-repeat;
    width: 2rem;
    border: 0;
    aspect-ratio: 1;
    top: 2rem;
    right: 2rem;
  }

  .mobile-nav-toggle[aria-expanded="true"] {
    background: transparent; /* hier die Url für das Schließen.svg einsetzen und background-image draus machen*/
  }
}
</style>
<script>
export default {
  name: "HeaderLayout",
  data() {
    return {
      isMenuOpen: false,
    };
  },
};
</script>
