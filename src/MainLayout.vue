<template>
  <div class="app">
    <Title>CSStools</Title>

    <div class="content">
      <Controls />

      <Divider />

      <Result />
    </div>
  </div>
</template>

<script>
import Title from "./components/ui/Title";
import Controls from "./components/Controls";
import Result from "./components/Result";
import Divider from "./components/ui/Divider";

export default {
  name: "MainLayout",
  components: {
    Divider,
    Result,
    Title,
    Controls
  }
};
</script>

<style lang="scss" scoped>
$breakpoint: 992px;

.app {
  width: 1020px;
  border-radius: 0.15em;
  background: #e0e5e8;
  padding: 30px 0;
  box-shadow: 0 0 20px transparentize(#000, 0.92);
  @media (max-width: $breakpoint) {
    overflow-y: scroll;
  }
}

.content {
  display: flex;
  @media (max-width: $breakpoint) {
    flex-direction: column;
    align-items: center;
  }

  .controls,
  .result {
    text-align: center;
    width: 50%;
    @media (max-width: $breakpoint) {
      width: 100%;
    }
  }
}
</style>
