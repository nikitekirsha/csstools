<template>
  <div>
    <Range v-model="ltValue" min="0" :max="maxValue" />
    <Range v-model="rtValue" min="0" :max="maxValue" />
    <Range v-model="blValue" min="0" :max="maxValue" />
    <Range v-model="brValue" min="0" :max="maxValue" />
  </div>
</template>

<script>
import Range from "../Range";
export default {
  name: "BorderRadius",
  components: { Range },
  data() {
    return {
      maxValue: 999,
      ltValue: 0,
      rtValue: 0,
      blValue: 0,
      brValue: 0
    };
  }
};
</script>
