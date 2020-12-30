<template>
  <div class="result">
    <ContentWrapper>
      <Subtitle>результат:</Subtitle>
      <div class="block"></div>
      <Input />
    </ContentWrapper>
  </div>
</template>

<script>
import Input from "./ui/Input";
import Subtitle from "./ui/Subtitle";
import ContentWrapper from "./ui/ContentWrapper";

export default {
  name: "Result",
  components: {
    Input,
    Subtitle,
    ContentWrapper
  }
};
</script>

<style lang="scss" scoped>
.block {
  background: #9a142d;
  width: 220px;
  height: 220px;
  border-radius: 0.3em;
  box-shadow: 7px 7px 4px transparentize(#000, 0.74);
  margin: 0 auto 75px;
}
</style>
