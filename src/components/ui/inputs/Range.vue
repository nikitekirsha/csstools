<template>
  <div class="parent">
    <label v-if="title" class="text">{{ title }}</label>
    <input
      class="range"
      type="range"
      :min="min"
      :max="max"
      :step="step"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "Range",
  props: {
    title: String,
    min: String,
    max: String,
    step: String,
    value: String
  }
};
</script>

<style lang="scss" scoped>
.parent {
  margin-bottom: 20px;
  position: relative;
  text-align: left;
}

.text {
  padding-bottom: 5px;
  font-size: 14px;
  color: #a4a8ab;
  user-select: none;
}

$bg: #e0e5e8;

.range {
  width: 100%;
  -webkit-appearance: none;
  background: transparent;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  &:focus {
    outline: none;
  }

  &::-ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
}

/* circle */

.range::-webkit-slider-thumb {
  $size: 8px;

  width: $size;
  height: $size;
  border-radius: $size / 2;
  background: $bg;
  cursor: pointer;
  margin: -($size * 0.375) 0;
}

.range::-moz-range-thumb {
  $size: 8px;

  width: $size;
  height: $size;
  border-radius: $size / 2;
  background: $bg;
  cursor: pointer;
}

.range::-ms-thumb {
  $size: 8px;

  width: $size;
  height: $size;
  border-radius: $size / 2;
  background: $bg;
  cursor: pointer;
  transform: translateY(4px);
}

/* track */

.range::-webkit-slider-runnable-track {
  $size: 2px;

  height: $size;
  cursor: pointer;
  background: $bg;
  border-radius: $size / 2;
}

.range::-moz-range-track {
  $size: 2px;

  height: $size;
  cursor: pointer;
  background: $bg;
  border-radius: $size / 2;
}

.range::-ms-track {
  $size: 2px;

  height: $size;
  cursor: pointer;
  background: $bg;
  border-radius: $size / 2;
}
</style>
