<template>
  <main id="app" class="app">
    <sprite />
    <div class="app__container">
      <the-header :title="appTitle" />
      <sort-bar />
      <movies-grid :movies="nowPlaying" :config="moviesConfig" :details="moviesDetails" />
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
import keys from '../keys.js';

export default {
  name: 'app',
  data() {
    return {
      appTitle: 'Movies List',
      moviesConfig: {},
      nowPlaying: [],
      moviesDetails: [],
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

    // Fetch all the data required when the component is first created.
    // By doing so, we call the TMDb API only once.

    const API_KEY = keys.tmdb; // The API key from the keys.js file.

    // First: Let's get the configuration object, so we can use it later to build image URLs.
    fetch('https://api.themoviedb.org/3/configuration?api_key=' + API_KEY)
      .then(res => res.json())
      .then(json => this.moviesConfig = json);

    // Second: Let's get the list with the Now Playing movies.
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=' + API_KEY)
      .then(res => res.json())
      .then(json => {
        let results = json.results;
        this.nowPlaying = results;

        // Third: Now that we have the Now Playing movies, let's loop through them and get the movie details for each movie.
        // This will be used later to access and display the genres for each movie.
        results.forEach(movie => {
          fetch('https://api.themoviedb.org/3/movie/' + movie.id + '?api_key=' + API_KEY)
            .then(res => res.json())
            .then(json => this.moviesDetails.push(json));
        });
      });

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
