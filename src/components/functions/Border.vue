<template>
  <div>
    <Input
      min="0"
      max="110"
      v-model="borderWidth"
      placeholder="ширина обводки"
      type="number"
      customStyle="margin-bottom: 10px"
      @input="handler"
    />
    <Select
      v-model="selectedBorderType"
      :items="borderTypes"
      placeholder="тип обводки"
      customStyle="margin-bottom: 10px"
      @input="handler"
    />
    <ColorPicker v-model="color" title="цвет:" @input="handler" />
  </div>
</template>

<script>
import Input from "../ui/inputs/Input";
import Select from "../ui/inputs/Select";
import ColorPicker from "../ui/inputs/ColorPicker";

export default {
  name: "Border",
  components: {
    ColorPicker,
    Select,
    Input
  },
  data() {
    return {
      borderWidth: 0,
      borderTypes: [
        "dotted",
        "dashed",
        "solid",
        "double",
        "groove",
        "ridge",
        "inset",
        "outset"
      ],
      selectedBorderType: null,
      color: "#000"
    };
  },
  computed: {
    styles() {
      return {
        border: `${this.borderWidth}px ${this.selectedBorderType || "solid"} ${
          this.color
        }`
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
