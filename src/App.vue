<template>
  <div class="background">
    <MainLayout />
  </div>
</template>

<script>
import MainLayout from "./MainLayout";

export default {
  name: "App",
  components: {
    MainLayout
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

.background {
  background: url("assets/bg.jpg") no-repeat fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  min-width: 320px;
  overflow-x: hidden;
  height: 100vh;
  font-family: Gotham Pro, Roboto, -apple-system, system-ui, sans-serif;
  font-weight: 300;
  @media (max-width: 992px) {
    height: auto;
  }
}

::selection {
  background: #e0e5e8;
}

::-webkit-scrollbar {
  display: none;
}
</style>
