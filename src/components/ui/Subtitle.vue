<template>
  <h2 class="subtitle">
    <slot></slot>
  </h2>
</template>

<script>
export default {
  name: "Subtitle"
};
</script>

<style lang="scss" scoped>
.subtitle {
  color: #5b3276;
  font-size: 22px;
  padding-bottom: 70px;
}
</style>
