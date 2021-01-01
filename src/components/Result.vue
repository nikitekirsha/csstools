<template>
  <div class="result">
    <ContentWrapper>
      <Subtitle>результат:</Subtitle>
      <Block />
      <Input />
    </ContentWrapper>
  </div>
</template>

<script>
import Input from "./ui/Input";
import Subtitle from "./ui/Subtitle";
import ContentWrapper from "./ui/ContentWrapper";
import Block from "./Block";

export default {
  name: "Result",
  components: {
    Block,
    Input,
    Subtitle,
    ContentWrapper
  }
};
</script>
