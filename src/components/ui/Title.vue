<template>
  <h1 class="title">
    <slot></slot>
  </h1>
</template>

<script>
export default {
  name: "Title"
};
</script>

<style lang="scss" scoped>
.title {
  $bg: #1fd080;

  font-size: 18px;
  background: $bg;
  padding: 14px;
  width: 300px;
  text-align: center;
  border-radius: 0.3em;
  color: #fff;
  border-bottom: 2px solid darken($bg, 14%);
  margin: 0 auto 50px;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @media (max-width: 576px) {
    width: auto;
    margin: 0 10px 50px;
  }
}
</style>
