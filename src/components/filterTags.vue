<template>
  <div>
    <label>
      <input v-model="tagsValue" type="checkbox" name="tags" value="warm" />warm
    </label>
    <label>
      <input v-model="tagsValue" type="checkbox" name="tags" value="kalt" />kalt
    </label>
    <label>
      <input v-model="tagsValue" type="checkbox" name="tags" value="süß" />süß
    </label>
    <label>
      <input
        v-model="tagsValue"
        type="checkbox"
        name="tags"
        value="herzhaft"
      />herzhaft
    </label>
    <label>
      <input
        v-model="tagsValue"
        type="checkbox"
        name="tags"
        value="vegetarisch"
      />vegetarisch
    </label>
    <label>
      <input
        v-model="tagsValue"
        type="checkbox"
        name="tags"
        value="vegan"
      />vegan
    </label>
    <label>
      <input
        v-model="tagsValue"
        type="checkbox"
        name="tags"
        value="mit Fleisch"
      />mit Fleisch
    </label>
    <label>
      <input
        v-model="tagsValue"
        type="checkbox"
        name="tags"
        value="mit Fisch"
      />mit Fisch
    </label>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  width: 100%;
}
label {
  font-size: 1.2rem;
  background-color: var(--color-beige);
  color: var(--color-orange);
  border: 2px solid currentColor;
  border-radius: 3rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
label:hover,
label:has(input:checked) {
  background-color: var(--color-orange);
  color: var(--color-beige);
  border-color: transparent;
}
input {
  display: none;
}
</style>

<script>
export default {
  name: "FilterTags",
  props: ["tags"],
  emits: ["update:tags"],
  data() {
    return { tagsValue: [] };
  },
  watch: {
    tagsValue: {
      handler(newValue) {
        this.$emit("update:tags", newValue);
      },
      immediate: true,
      deep: true,
    },
  },
  created() {
    setTimeout(() => {
      this.tagsValue = this.tags;
    }, 100);
  },
};
</script>
