<template>
  <main id="app" class="app">
    <sprite />
    <div class="app__container">
      <the-header :title="appTitle" />
      <sort-bar 
        :theKey="sortKey" 
        :theDir="sortDir"
        @keyChange="changeKey"
        @dirChange="changeDir"
        @ratingChanged="changeRating" />
      <movies-grid 
        v-if="isLoaded"
        :movies="filteredMovies" 
        :config="moviesConfig" 
        :details="moviesDetails" />
      <error-state 
        v-else-if="!isLoaded && error.state"
        :error="error" />
      <the-footer />
    </div>
  </main>
</template>

<script>
import Sprite from './components/Sprite.vue';
import Header from './components/Header.vue';
import SortBar from './components/SortBar.vue';
import ErrorState from './components/ErrorState.vue';
import MoviesGrid from './components/MoviesGrid.vue';
import Footer from './components/Footer.vue';
import tmdb from './tmdb.js';

export default {
  name: 'app',
  components: {
    'sprite': Sprite,
    'the-header': Header,
    'sort-bar': SortBar,
    'error-state': ErrorState,
    'movies-grid': MoviesGrid,
    'the-footer': Footer,
  },
  data() {
    return {
      appTitle: 'Movies List',
      moviesConfig: {},
      nowPlaying: [],
      moviesDetails: [],
      sortKey: 'popular',
      sortDir: 'desc',
      filterRating: 3,
      error: {
        state: false,
        title: 'There seems to be a problem',
        messages: [],
      },
      loaded: {
        config: false,
        movies: false,
        details: false,
      },
    }
  },
  computed: {

    // Sort the nowPlaying movies according to the selected sortKey, sortDir and filter them by filterRating.
    filteredMovies() {
      let sorted = this.nowPlaying.slice().sort((a, b) => {
        if (this.sortKey === 'popular') return a.popularity - b.popularity;
        if (this.sortKey === 'rating') return a.vote_average - b.vote_average;
      });
      if (this.sortDir === 'desc') sorted.reverse();
      return sorted.filter(movie => movie.vote_average > this.filterRating);
    },

    // Check to see if all the data has loaded and that there are no errors.
    isLoaded() {
      return this.loaded.config && this.loaded.details && this.loaded.movies && !this.error.state;
    },

  },
  methods: {

    // When the keyChange event is triggered on the SortBar, 
    // get the event value and set it as sortKey.
    changeKey(value) {
      this.sortKey = value;
    },

    // When the dirChange event is triggered on the SortBar, 
    // get the event value and set it as sortDir.
    changeDir(value) {
      this.sortDir = value;
    },

    // When the ratingChanged event is triggered on the SortBar,
    // get the event value and set it as filterRating.
    changeRating(value) {
      this.filterRating = Number(value);
    },

  },
  created() {

    // Fetch all the data required when the component is first created.
    // By doing so, we call the TMDb API only once.

    // Check the response status and log the error if necessary.
    function checkResponse(res) {
      if (res.status !== 200) {
        this.error.state = true;
        this.error.messages.push('The TMDb server failed to respond. Try again later.');
        this.error.messages.push('Status Code: ' + res.status);
        return;
      }
    }

    // First: Let's get the configuration object, so we can use it later to build image URLs.
    fetch('https://api.themoviedb.org/3/configuration?api_key=' + tmdb)
      .then(res => {
        checkResponse(res);
        return res.json();
      })
      .then(json => {
        this.moviesConfig = json;
        this.loaded.config = true;
      })
      .catch(() => {
        this.loaded.config = false;
        this.error.state = true;
        this.error.messages.push('Couldn\'t fetch the config.');
      });

    // Second: Let's get the list with the Now Playing movies.
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=' + tmdb)
      .then(res => {
        checkResponse(res);
        return res.json();
      })
      .then(json => {
        let results = json.results;

        // Sort the initial results in descending order by popularity.
        let sortedResults = results.sort((a, b) => a.popularity - b.popularity).reverse();
        this.nowPlaying = sortedResults;

        // Third: Now that we have the Now Playing movies, let's loop through them and get the movie details for each movie.
        // This will be used later to access and display the genres for each movie.
        sortedResults.forEach(movie => {
          fetch('https://api.themoviedb.org/3/movie/' + movie.id + '?api_key=' + tmdb)
            .then(res => {
              checkResponse(res);
              return res.json();
            })
            .then(json => {
              this.moviesDetails.push(json);
              this.loaded.details = true;
            })
            .catch(() => this.loaded.details = false);
        });

        this.loaded.movies = true;
      })
      .catch(() => {
        this.loaded.movies = false;
        this.error.state = true;
        this.error.messages.push('Couldn\'t fetch the movies.');
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
