<template>
  <div class="controls">
    <Subtitle>свойство:</Subtitle>
    <ContentWrapper>
      <Items />
    </ContentWrapper>
  </div>
</template>

<script>
import Subtitle from "./ui/Subtitle";
import ContentWrapper from "./ui/ContentWrapper";
import Items from "./Items";

export default {
  name: "Controls",
  components: {
    Items,
    Subtitle,
    ContentWrapper
  }
};
</script>
