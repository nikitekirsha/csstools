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
    <ColorPicker
      title="цвет:"
      customStyle="margin-bottom: 10px"
      v-model="color"
      @input="handler"
    />
  </div>
</template>

<script>
import Range from "../ui/inputs/Range";
import ColorPicker from "../ui/inputs/ColorPicker";
export default {
  name: "BoxShadow",
  components: {
    ColorPicker,
    Range
  },
  data() {
    return {
      color: "#000",
      horizontal: "0",
      vertical: "0",
      blur: "0",
      opacity: "1"
    };
  },
  computed: {
    colorRgb() {
      let c;

      if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(this.color)) {
        c = this.color.substring(1).split("");

        if (c.length === 3) {
          c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }

        c = "0x" + c.join("");
        return `${(c >> 16) & 255}, ${(c >> 8) & 255}, ${c & 255}`;
      }

      return c;
    },
    styles() {
      return {
        "box-shadow": `${this.horizontal}px ${this.vertical}px ${this.blur}px rgba(${this.colorRgb}, ${this.opacity})`
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
