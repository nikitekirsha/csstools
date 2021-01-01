<template>
  <div class="input-group">
    <input placeholder="сюда выведется css" class="input" type="text" :value="blockStyles" />
    <button class="input-group__button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 11 14"
        width="16"
        height="16"
        style="transform: translateY(1px)"
      >
        <defs />
        <path
          fill="none"
          stroke="#a4a8ab"
          opacity="0.6"
          d="M9 1.63v-.2A.93.93 0 008.07.5H1.43a.93.93 0 00-.93.93v9.14a.93.93 0 00.93.93h.42a.93.93 0 01.93.93v.2a.93.93 0 00.93.93h6.64a.93.93 0 00.93-.93V3.5a.93.93 0 00-.93-.93h-.42A.93.93 0 019 1.63z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "Input",
  computed: {
    blockStyles() {
      let currentProperty = this.$store.getters.currentProperty;
      let currentStyles = this.$store.getters.allBlockStyles[`${currentProperty}`] || "";

      if (currentProperty) {
        return currentProperty + ": " + currentStyles;
      } else {
        return "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.input-group {
  $text: #a4a8ab;

  background: #fff;
  border-radius: 0.3em;
  border: 1px solid #dee4e4;
  display: flex;
  overflow: hidden;
  @media (max-width: 992px) {
    max-width: 300px;
    margin: 0 auto;
  }

  .input,
  &__button {
    border: none;
    outline: none;
    background: none;
    font-family: Gotham Pro, Roboto, -apple-system, system-ui, sans-serif;
  }

  .input {
    padding: 12px;
    font-size: 18px;
    color: #000;
    font-weight: 400;
    flex-grow: 1;
    @media (max-width: 576px) {
      flex-grow: unset;
      width: 80%;
    }

    &::placeholder {
      color: $text;
      font-size: 16px;
      font-weight: 300;
    }
  }

  &__button {
    cursor: pointer;
    z-index: 1;
    color: $text;
    padding: 0 10px;
    font-size: 14px;
    transition: 0.3s ease;
    @media (max-width: 576px) {
      width: 20%;
    }

    &:hover {
      opacity: 0.6;
    }
  }
}
</style>
