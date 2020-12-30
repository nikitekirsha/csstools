<template>
  <div class="divider"></div>
</template>

<script>
export default {
  name: "Divider"
};
</script>

<style lang="scss" scoped>
.divider {
  $w: 1px;

  background: #b4bebf;
  transform: translateX($w);
  height: 500px;
  width: $w;
  @media (max-width: 992px) {
    transform: translateX(0);
    width: 80%;
    height: $w;
    margin: 100px 0;
  }
}
</style>
