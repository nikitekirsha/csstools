<template>
  <div>
    <Range
      title="Верхний левый угол:"
      :min="minValue"
      :max="maxValue"
      v-model="tlValue"
      @input="handler"
    />
    <Range
      title="Верхний правый угол:"
      :min="minValue"
      :max="maxValue"
      v-model="trValue"
      @input="handler"
    />
    <Range
      title="Нижний правый угол:"
      :min="minValue"
      :max="maxValue"
      v-model="brValue"
      @input="handler"
    />
    <Range
      title="Нижний левый угол:"
      :min="minValue"
      :max="maxValue"
      v-model="blValue"
      @input="handler"
    />
  </div>
</template>

<script>
import Range from "../ui/inputs/Range";
export default {
  name: "BorderRadius",
  components: { Range },
  data() {
    return {
      minValue: "0",
      maxValue: "110",
      tlValue: "0",
      trValue: "0",
      blValue: "0",
      brValue: "0"
    };
  },
  computed: {
    styles() {
      return {
        "border-radius": `${this.tlValue}px ${this.trValue}px ${this.brValue}px ${this.blValue}px`
      };
    },
    currentProperty() {
      return this.$store.getters.currentProperty;
    },
    allBlockStyles() {
      return this.$store.getters.allBlockStyles;
    }
  },
  watch: {
    allBlockStyles(newValue) {
      let styles = newValue[this.currentProperty];

      if (!styles) {
        this.minValue = "0";
        this.maxValue = "110";
        this.tlValue = "0";
        this.trValue = "0";
        this.blValue = "0";
        this.brValue = "0";
        this.handler();
      }
    }
  },
  methods: {
    handler() {
      this.$store.commit("updateBlockStyles", this.styles);
    }
  },
  mounted() {
    this.handler();
  }
};
</script>
