<template>
  <main id="app" class="app">
    <sprite />
    <header>
      <h1 class="app__title">Movies List</h1>
    </header>
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
  padding: 0 rem(20);
  @include breakpoint(min, rem(481)) { padding: 0 rem(40); }
  @include breakpoint(min, rem(601)) { padding: 0 rem(60); }

  &__title {
    display: block;
    width: 100%;
    padding-left: rem(4);
    margin-top: rem(30);
    margin-bottom: rem(30);
    font-family: font(montserrat);
    font-weight: weight(regular);
    font-size: rem(16);
    letter-spacing: rem(4);
    text-transform: uppercase;
    text-align: center;
    color: color-scheme(global, title);
    @include breakpoint(min, rem(301)) {
      @include fluid-prop(font-size, 301, 480, 16, 20);
      @include fluid-prop(letter-spacing, 301, 480, 4, 20);
      @include fluid-prop(padding-left, 301, 480, 4, 20);
      @include fluid-prop(margin-top, 301, 480, 30, 40);
      @include fluid-prop(margin-bottom, 301, 480, 30, 40);
    }
    @include breakpoint(min, rem(481)) {
      @include fluid-prop(font-size, 481, 1170, 20, 40);
      @include fluid-prop(letter-spacing, 481, 1170, 20, 40);
      @include fluid-prop(padding-left, 481, 1170, 20, 40);
      @include fluid-prop(margin-top, 481, 1170, 40, 60);
      @include fluid-prop(margin-bottom, 481, 1170, 40, 60);
    }
    @include breakpoint(min, rem(1171)) {
      margin-top: rem(60);
      margin-bottom: rem(60);
      padding-left: rem(40);
      font-size: rem(40);
      letter-spacing: rem(40);
    }
  }

  &__container {
    display: block;
    width: 100%;
    max-width: rem(1050);
    margin: 0 auto;
  }
}
</style>
