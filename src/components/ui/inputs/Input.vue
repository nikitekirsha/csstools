<template>
  <input
    class="input"
    :style="customStyle"
    :value="value"
    :min="min"
    :max="max"
    :placeholder="placeholder"
    :type="type"
    @input="$emit('input', $event.target.value)"
    ref="input"
  />
</template>

<script>
export default {
  name: "Input",
  props: {
    value: null,
    min: String,
    max: String,
    type: String,
    placeholder: String,
    customStyle: String
  },
  mounted() {
    this.$refs["input"].value = "";
  }
};
</script>

<style lang="scss" scoped>
.input {
  display: block;
  border-radius: 0.3em;
  border: none;
  outline: none;
  background: #f2f2f2;
  padding: 10px 16px;
  font-size: inherit;
  margin: 0 auto;
  max-width: 100%;
  font-family: inherit;
  width: 100%;

  &::placeholder {
    font-weight: 300;
    color: #a4a8ab;
  }
}
</style>
