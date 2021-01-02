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
