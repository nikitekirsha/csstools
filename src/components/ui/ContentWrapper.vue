<template>
  <div class="content__wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ContentWrapper"
};
</script>

<style lang="scss" scoped>
.content__wrapper {
  padding: 0 100px;
  @media (max-width: 992px) {
    padding: 0 20px;
  }
}
</style>
