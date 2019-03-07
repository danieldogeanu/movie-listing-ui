<template>
  <div id="app" class="app">
    <sprite />
    <h1 class="app__title">Movies List</h1>
    <div class="app__container">
      <sort-bar />
      <movies-grid />
    </div>
  </div>
</template>

<script>
import Sprite from './components/Sprite.vue';
import SortBar from './components/SortBar.vue';
import MoviesGrid from './components/MoviesGrid.vue';

export default {
  name: 'app',
  components: {
    'sprite': Sprite,
    'sort-bar': SortBar,
    'movies-grid': MoviesGrid,
  }
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
  &__container {
    display: block;
    width: 100%;
    max-width: rem(1050);
    margin: 0 auto;
  }
}
</style>
