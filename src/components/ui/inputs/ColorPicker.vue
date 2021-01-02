<template>
  <div :style="customStyle">
    <label v-if="title" class="title">{{ title }}</label>
    <input
      class="input"
      type="color"
      @input="$emit('input', $event.target.value)"
      ref="colorpicker"
    />
  </div>
</template>

<script>
export default {
  name: "ColorPicker",
  props: {
    value: String,
    customStyle: String,
    title: String
  }
};
</script>

<style lang="scss" scoped>
.title {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  text-align: left;
}

.input {
  -webkit-appearance: none;
  border: none;
  outline: none;
  width: 100%;
  height: 2rem;
}

.input::-webkit-color-swatch-wrapper {
  padding: 0;
}

.input::-webkit-color-swatch {
  border: 0;
  border-radius: 0.3em;
  cursor: pointer;
}
</style>
