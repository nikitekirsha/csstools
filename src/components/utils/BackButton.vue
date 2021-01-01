<template>
  <button @click="getBack" class="button">
    <svg
      class="button__icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 74 136"
    >
      <defs />
      <path
        d="M68 136a6 6 0 01-4.24-1.76l-62-62a6 6 0 010-8.48l62-62a6 6 0 118.48 8.48L14.49 68l57.75 57.76A6 6 0 0168 136z"
      />
    </svg>
  </button>
</template>

<script>
export default {
  name: "BackButton",
  computed: {
    currentProperty() {
      return this.$store.getters.currentProperty;
    }
  },
  methods: {
    getBack() {
      this.$store.commit("getBack");
    }
  }
};
</script>

<style lang="scss" scoped>
$size: 20px;

.button {
  background: none;
  border: none;
  outline: none;
  width: $size;
  height: $size;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  &__icon {
    width: 100%;
    height: 100%;
  }
}
</style>
