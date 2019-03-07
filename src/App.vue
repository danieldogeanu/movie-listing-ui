<template>
  <main id="app" class="app">
    <sprite />
    <h1 class="app__title">Movies List</h1>
    <div class="app__container">
      <sort-bar />
      <movies-grid />
      <the-footer />
    </div>
  </main>
</template>

<script>
import Sprite from './components/Sprite.vue';
import SortBar from './components/SortBar.vue';
import MoviesGrid from './components/MoviesGrid.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    'sprite': Sprite,
    'sort-bar': SortBar,
    'movies-grid': MoviesGrid,
    'the-footer': Footer,
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
    padding-left: rem(40);
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
