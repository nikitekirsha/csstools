<template>
  <div>
    <ColorPicker
      title="первый цвет:"
      v-model="color1"
      customStyle="margin-bottom: 10px"
      @input="handler"
    />
    <ColorPicker
      title="второй цвет:"
      v-model="color2"
      customStyle="margin-bottom: 10px"
      @input="handler"
    />
    <Input
      v-model="color1Dim"
      shouldNotClear
      title="пространство первого цвета"
      customStyle="margin-bottom: 10px"
      type="number"
      min="0"
      max="100"
      @input="handler"
    />
    <Input
      v-model="color2Dim"
      shouldNotClear
      title="пространство второго цвета"
      customStyle="margin-bottom: 10px"
      type="number"
      min="0"
      max="100"
      @input="handler"
    />
    <Input
      v-model="degrees"
      shouldNotClear
      title="градус"
      type="number"
      min="0"
      max="360"
      @input="handler"
    />
  </div>
</template>

<script>
import ColorPicker from "../ui/inputs/ColorPicker";
import Input from "../ui/inputs/Input";
export default {
  name: "BackgroundImage",
  components: {
    Input,
    ColorPicker
  },
  data() {
    return {
      color1: "#9a142d",
      color1Dim: "0",
      color2: "#9a142d",
      color2Dim: "100",
      degrees: "0"
    };
  },
  computed: {
    styles() {
      return {
        "background-image": `linear-gradient(${this.degrees}deg, ${this.color1} ${this.color1Dim}%, ${this.color2} ${this.color2Dim}%)`
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
