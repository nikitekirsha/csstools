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
      @input="handler"
    />
  </div>
</template>

<script>
import Input from "../ui/inputs/Input";
import Select from "../ui/inputs/Select";

export default {
  name: "Border",
  components: {
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
      selectedBorderType: null
    };
  },
  computed: {
    styles() {
      return {
        border: `${this.borderWidth}px ${this.selectedBorderType ||
          "solid"} #000`
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
