<template>
  <select
    :style="customStyle"
    class="select"
    @input="$emit('input', $event.target.value)"
    ref="select"
    @change="changeStyle"
  >
    <option
      class="select__placeholder"
      v-if="placeholder"
      value=""
      disabled
      selected
    >
      {{ placeholder }}
    </option>
    <option v-for="(item, index) in items" :value="item" :key="index">
      {{ item }}
    </option>
  </select>
</template>

<script>
export default {
  name: "Select",
  props: {
    placeholder: String,
    items: Array,
    value: String,
    customStyle: String
  },
  methods: {
    changeStyle() {
      const item = this.$refs["select"];
      item.style.fontWeight = "400";
      item.style.color = "#000";
    }
  },
  mounted() {
    this.$refs["select"].style.fontWeight = "300";
  }
};
</script>

<style lang="scss" scoped>
.select {
  appearance: none;
  background: #f2f2f2;
  border-radius: 0.3em;
  display: block;
  border: none;
  font-family: inherit;
  font-size: inherit;
  outline: none;
  cursor: pointer;
  padding: 10px 16px;
  margin: 0 auto;
  width: 100%;
  color: #a4a8ab;
}
</style>
