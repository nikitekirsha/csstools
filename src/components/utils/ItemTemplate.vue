<template>
  <div class="item__container">
    <div class="item__topline">
      <BackButton />
      <small class="item__subtitle">{{ currentProperty }}</small>
    </div>
    <div class="item_full">
      <BackgroundImage v-if="currentProperty === 'background-image'" />
      <BoxShadow v-if="currentProperty === 'box-shadow'" />
      <BorderRadius v-if="currentProperty === 'border-radius'" />
      <Border v-if="currentProperty === 'border'" />
    </div>
  </div>
</template>

<script>
import BackButton from "./BackButton";
import BackgroundImage from "../functions/BackgroundImage";
import BoxShadow from "../functions/BoxShadow";
import BorderRadius from "../functions/BorderRadius";
import Border from "../functions/Border";

export default {
  name: "ItemTemplate",
  components: {
    Border,
    BorderRadius,
    BoxShadow,
    BackgroundImage,
    BackButton
  },
  computed: {
    currentProperty() {
      return this.$store.getters.currentProperty;
    }
  }
};
</script>

<style lang="scss" scoped>
.item_full {
  background: #fff;
  border-radius: 0.3em;
  border: 1px solid #dee4e4;
  padding: 30px 10px 45px;
  box-shadow: 0 0 20px transparentize(#000, 0.95);
  margin: 0 auto;
  height: 310px;
  overflow: auto;
}

.item__container {
  margin: 0 auto;
  @media (max-width: 992px) {
    max-width: 310px;
  }
  @media (max-width: 576px) {
    max-width: 100%;
  }
}

.item__topline {
  $size: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: -$size;
  transform: translateY(-$size);
  position: relative;
}

.item__subtitle {
  flex-grow: 1;
  font-size: 14px;
  color: #a4a8ab;
  margin: 0 auto;
  padding-right: 20px;
}
</style>
