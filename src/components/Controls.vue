<template>
  <div class="controls">
    <Subtitle>свойство:</Subtitle>
    <ContentWrapper>
      <ItemTemplate v-if="currentProperty" />
      <Items v-else />
    </ContentWrapper>
  </div>
</template>

<script>
import Subtitle from "./ui/Subtitle";
import ContentWrapper from "./ui/ContentWrapper";
import Items from "./Items";
import ItemTemplate from "./ui/ItemTemplate";

export default {
  name: "Controls",
  components: {
    ItemTemplate,
    Items,
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
