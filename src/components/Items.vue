<template>
  <div class="items">
    <Item>gradient</Item>
    <Item>box-shadow</Item>
    <Item>border-radius</Item>
    <Item>border</Item>
  </div>
</template>

<script>
import Item from "./Item";

export default {
  name: "Items",
  components: {
    Item
  }
};
</script>

<style lang="scss" scoped>
.items {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 992px) {
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}
</style>
