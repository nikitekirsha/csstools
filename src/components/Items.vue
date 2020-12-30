<template>
  <div class="items">
    <div class="item">
      <span class="item__title">gradient</span>
      <div class="item__icon"></div>
    </div>
    <div class="item">
      <span class="item__title">box-shadow</span>
      <div class="item__icon"></div>
    </div>
    <div class="item">
      <span class="item__title">border-radius</span>
      <div class="item__icon"></div>
    </div>
    <div class="item">
      <span class="item__title">border</span>
      <div class="item__icon"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Items"
};
</script>

<style lang="scss" scoped>
.items {
  $gap: 20px;

  display: grid;
  grid-gap: $gap;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 992px) {
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

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
}
</style>
