<template>
  <div class="items">
    <Item prop="gradient" />
    <Item prop="box-shadow" />
    <Item prop="border-radius" />
    <Item prop="border" />
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
