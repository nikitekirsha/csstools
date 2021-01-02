<template>
  <div>
    <Range
      title="горизонтальный отступ"
      min="-110"
      max="110"
      v-model="horizontal"
      @input="handler"
    />
    <Range
      title="вертикальный отступ"
      min="-110"
      max="110"
      v-model="vertical"
      @input="handler"
    />
    <Range title="размытие" min="0" max="110" v-model="blur" @input="handler" />
    <Range
      step="0.01"
      min="0"
      max="1"
      title="непрозрачность"
      v-model="opacity"
      @input="handler"
    />
  </div>
</template>

<script>
import Range from "../ui/inputs/Range";
export default {
  name: "BoxShadow",
  components: {
    Range
  },
  data() {
    return {
      horizontal: "0",
      vertical: "0",
      blur: "0",
      opacity: "1"
    };
  },
  computed: {
    styles() {
      return {
        "box-shadow": `${this.horizontal}px ${this.vertical}px ${this.blur}px rgba(0, 0, 0, ${this.opacity})`
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
