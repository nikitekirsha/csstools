<template>
  <button @click="handler" class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  methods: {
    handler() {
      this.$emit("press");
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
}
</style>
