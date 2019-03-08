<template>
  <main id="app" class="app">
    <sprite />
    <div class="app__container">
      <the-header :title="appTitle" />
      <sort-bar />
      <movies-grid :movies="nowPlaying" :config="moviesConfig" />
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
      moviesConfig: {},
      nowPlaying: [],
    }
  },
  components: {
    'sprite': Sprite,
    'the-header': Header,
    'sort-bar': SortBar,
    'movies-grid': MoviesGrid,
    'the-footer': Footer,
  },
  created() {
    const API_KEY = '2b5d51509f0a6ce82c2f8965762ff228';
    fetch('https://api.themoviedb.org/3/configuration?api_key=' + API_KEY)
      .then(res => res.json())
      .then(json => this.moviesConfig = json);
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=' + API_KEY)
      .then(res => res.json())
      .then(json => this.nowPlaying = json.results);
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
    .no-cssgrid & {
      max-width: rem(1080);
    }
  }
}
</style>
