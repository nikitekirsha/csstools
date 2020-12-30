<template>
  <div class="background">
    <div class="app">
      <h1 class="title">CSStools</h1>
      <div class="content">
        <div class="controls">
          <h2 class="subtitle">свойство:</h2>
          <div class="content__wrapper">
            <div class="items">
              <div class="item">
                <span class="item__title">gradient</span>
                <div class="item__icon"></div>
              </div>
              <div class="item">
                <span class="item__title">box-shadow</span>
                <div class="item__icon"></div>
              </div>
              <div class="item">
                <span class="item__title">border-radius</span>
                <div class="item__icon"></div>
              </div>
              <div class="item">
                <span class="item__title">border</span>
                <div class="item__icon"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="divider"></div>

        <div class="result">
          <h2 class="subtitle">результат:</h2>
          <div class="content__wrapper">
            <div class="block"></div>
            <div class="input-group">
              <input
                placeholder="сюда выведется css"
                class="input"
                type="text"
              />
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
$bdrs: 0.3em;
$bd: 1px solid #dee4e4;
$bg: #e0e5e8;
$breakpoint: 992px;
$text: #a4a8ab;
$trs: 0.3s ease;
$font: Gotham Pro, Roboto, -apple-system, system-ui, sans-serif;

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
  font-family: $font;
  font-weight: 300;
  @media (max-width: $breakpoint) {
    height: auto;
  }

  ::selection {
    background: $bg;
  }

  ::-webkit-scrollbar {
    display: none;
  }
}

.app {
  width: 1020px;
  border-radius: $bdrs / 2;
  background: $bg;
  padding: 30px 0;
  box-shadow: 0 0 20px transparentize(#000, 0.92);
  @media (max-width: $breakpoint) {
    overflow-y: scroll;
  }
}

.title {
  $bg: #1fd080;

  font-size: 18px;
  background: $bg;
  padding: 14px;
  width: 300px;
  text-align: center;
  border-radius: $bdrs;
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

.content {
  display: flex;
  @media (max-width: $breakpoint) {
    flex-direction: column;
    align-items: center;
  }

  &__wrapper {
    padding: 0 100px;
    @media (max-width: $breakpoint) {
      padding: 0 20px;
    }
  }

  .controls,
  .result {
    text-align: center;
    width: 50%;
    @media (max-width: $breakpoint) {
      width: 100%;
    }
  }

  .divider {
    $w: 1px;

    background: #b4bebf;
    transform: translateX($w);
    height: 500px;
    width: $w;
    @media (max-width: $breakpoint) {
      transform: translateX(0);
      width: 80%;
      height: $w;
      margin: 100px 0;
    }
  }
}

.subtitle {
  color: #5b3276;
  font-size: 22px;
  padding-bottom: 70px;
}

.items {
  $gap: 20px;

  display: grid;
  grid-gap: $gap;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: $breakpoint) {
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .item {
    background: #fff;
    border-radius: $bdrs;
    border: $bd;
    padding: 30px 10px 45px;
    box-shadow: 0 0 20px transparentize(#000, 0.92);
    cursor: pointer;
    transition: $trs;

    &:hover {
      opacity: 0.6;
    }

    &__title {
      color: $text;
      font-size: 17px;
    }

    &__icon {
      background: $bg;
      width: 45px;
      height: 30px;
      margin: 20px auto 0;
      border-radius: $bdrs / 2;
    }
  }
}

.block {
  background: #9a142d;
  width: 220px;
  height: 220px;
  border-radius: $bdrs;
  box-shadow: 7px 7px 4px transparentize(#000, 0.74);
  margin: 0 auto 75px;
}

.input-group {
  background: #fff;
  border-radius: $bdrs;
  border: $bd;
  display: flex;
  overflow: hidden;
  @media (max-width: $breakpoint) {
    max-width: 300px;
    margin: 0 auto;
  }

  .input,
  &__button {
    border: none;
    outline: none;
    background: none;
    font-family: $font;
  }

  .input {
    flex-grow: 1;
    padding: 12px;
    font-size: 18px;
    color: #000;
    font-weight: 400;

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
    transition: $trs;

    &:hover {
      opacity: 0.6;
    }
  }
}
</style>
