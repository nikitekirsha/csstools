<template>
  <div class="result">
    <ContentWrapper>
      <Subtitle>результат:</Subtitle>
      <Block />
      <Output v-if="currentProperty" />
    </ContentWrapper>
  </div>
</template>

<script>
import Output from "./Output";
import Subtitle from "./ui/Subtitle";
import ContentWrapper from "./ui/ContentWrapper";
import Block from "./Block";

export default {
  name: "Result",
  components: {
    Block,
    Output,
    Subtitle,
    ContentWrapper
  },
  computed: {
    currentProperty() {
      return this.$store.getters.currentProperty;
    }
  }
};
</script>
