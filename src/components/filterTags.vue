<template>
  <div>
    <label>
      <input v-model="tags" type="checkbox" name="tags" value="warm" />warm
    </label>
    <label>
      <input v-model="tags" type="checkbox" name="tags" value="kalt" />kalt
    </label>
    <label>
      <input v-model="tags" type="checkbox" name="tags" value="süß" />süß
    </label>
    <label>
      <input
        v-model="tags"
        type="checkbox"
        name="tags"
        value="herzhaft"
      />herzhaft
    </label>
    <label>
      <input
        v-model="tags"
        type="checkbox"
        name="tags"
        value="vegetarisch"
      />vegetarisch
    </label>
    <label>
      <input
        v-model="tags"
        type="checkbox"
        name="tags"
        value="mit Fleisch"
      />mit Fleisch
    </label>
    <label>
      <input v-model="tags" type="checkbox" name="tags" value="mit Fisch" />mit
      Fisch
    </label>
    <label>
      <input v-model="tags" type="checkbox" name="tags" value="vegan" />vegan
    </label>
  </div>
</template>

<style scoped></style>

<script>
export default {
  name: "RecipeInputView",
  data() {
    return {
      tags: [],
    };
  },
};
</script>
