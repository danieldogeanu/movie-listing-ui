<template>
  <main id="app" class="app">
    <sprite />
    <div class="app__container">
      <the-header :title="appTitle" />
      <sort-bar />
      <movies-grid />
      <the-footer />
    </div>
  </main>
</template>

<script>
import Sprite from './components/Sprite.vue';
import Header from './components/Header.vue';
import SortBar from './components/SortBar.vue';
import MoviesGrid from './components/MoviesGrid.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  data() {
    return {
      appTitle: 'Movies List',
    }
  },
  components: {
    'sprite': Sprite,
    'the-header': Header,
    'sort-bar': SortBar,
    'movies-grid': MoviesGrid,
    'the-footer': Footer,
  }
}
</script>

<style lang="scss">
@import './styles/includes';
@import './styles/plugins';
@import './styles/global';

.app {
  padding: 0 rem(20);
  @include breakpoint(min, rem(481)) { padding: 0 rem(40); }
  @include breakpoint(min, rem(601)) { padding: 0 rem(60); }

  &__container {
    display: block;
    width: 100%;
    max-width: rem(1050);
    margin: 0 auto;
  }
}
</style>
