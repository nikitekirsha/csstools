<template>
  <div class="items">
    <Item
      iconStyle="background-image: linear-gradient(to right, #b9b9b9, #e0e5e8);"
      prop="background-image"
    />
    <Item iconStyle="box-shadow: 6px 6px 4px #d4d6d5;" prop="box-shadow" />
    <Item iconStyle="border-radius: 12px" prop="border-radius" />
    <Item
      iconStyle="background: none; border-left-style: dashed; border-bottom-style: dashed; border-top-style: solid; border-right-style: solid; border-width: 3px; border-color: #e0e5e8;"
      prop="border"
    />
  </div>
</template>

<script>
import Item from "./utils/Item";

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
