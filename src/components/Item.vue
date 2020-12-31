<template>
  <div @click="selectProperty" class="item">
    <span class="item__title">{{ prop }}</span>
    <div class="item__icon"></div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    prop: String
  },
  methods: {
    selectProperty() {
      this.$store.commit("selectProperty", this.prop);
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  background: #fff;
  border-radius: 0.3em;
  border: 1px solid #dee4e4;
  padding: 30px 10px 45px;
  box-shadow: 0 0 20px transparentize(#000, 0.95);
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
    border-radius: 0.15em;
  }
}
</style>
