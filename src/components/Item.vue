<template>
  <div class="item">
    <span class="item__title">
      <slot></slot>
    </span>
    <div class="item__icon"></div>
  </div>
</template>

<script>
export default {
  name: "Item"
};
</script>

<style lang="scss" scoped>
.item {
  background: #fff;
  border-radius: 0.3em;
  border: 1px solid #dee4e4;
  padding: 30px 10px 45px;
  box-shadow: 0 0 20px transparentize(#000, 0.92);
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    opacity: 0.6;
  }

  &__title {
    color: #a4a8ab;
    font-size: 17px;
  }

  &__icon {
    background: #e0e5e8;
    width: 45px;
    height: 30px;
    margin: 20px auto 0;
    border-radius: 0.3em / 2;
  }
}
</style>
