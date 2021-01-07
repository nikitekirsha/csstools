<template>
  <div class="item__container">
    <div class="item__topline">
      <Button @press="getBack">
        <svg
          style="float: left; transform: translateX(-5px);"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 74 136"
        >
          <defs />
          <path
            d="M68 136a6 6 0 01-4.24-1.76l-62-62a6 6 0 010-8.48l62-62a6 6 0 118.48 8.48L14.49 68l57.75 57.76A6 6 0 0168 136z"
          />
        </svg>
      </Button>
      <small class="item__subtitle">{{ currentProperty }}</small>
      <Button @press="resetStyles">
        <svg
          style="width: 20px; height: 100%;"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <defs />
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="32"
            d="M320 146s24.36-12-64-12a160 160 0 10160 160"
          />
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            d="M256 58l80 80-80 80"
          />
        </svg>
      </Button>
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
import Button from "./Button";
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
    Button
  },
  computed: {
    currentProperty() {
      return this.$store.getters.currentProperty;
    }
  },
  methods: {
    getBack() {
      this.$store.commit("getBack");
    },
    resetStyles() {
      this.$store.commit("updateBlockStyles");
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
}
</style>
