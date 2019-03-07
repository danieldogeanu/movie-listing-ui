<template>
  <div id="app" class="app">
    <h1 class="app__title">Movie List</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {}
}
</script>

<style lang="scss">
@import './styles/includes';
@import './styles/global';

.app {
  &__title {
    display: block;
    width: 100%;
    margin: rem(60) 0;
    font-family: font(montserrat);
    font-weight: weight(regular);
    font-size: rem(40);
    letter-spacing: rem(40);
    text-transform: uppercase;
    text-align: center;
    color: color-scheme(global, title);
  }
}
</style>
