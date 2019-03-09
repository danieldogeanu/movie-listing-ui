# Movie Listing UI

Front End Challenge for [Zone Digital](https://www.zonedigital.com/)

### [See Live Preview Here](https://movieslist.ddev.ro/)

### [See Challenge Description Here](https://zone.github.io/frontend/movie-listing-ui)

## Project Setup

### Install Project
First, you need to install the project. For this you'll need to have NodeJS installed on your machine and run the following command:
```
npm install
```

Second, you'll need to provide the app with an API Key. You do so by creating a `keys.js` file at the root of the project. The `keys.js` file must export an object with the `tmdb` key, like so:
```
export default {
	tmdb: 'your_key_goes_here',
};
```
To get an API Key, you need an [TMDb account](https://www.themoviedb.org/account/signup). Once you are registered, go to account settings and click `API` in the sidebar.

NOTE: I did it like this because I develop on a Windows machine and can't access ENV variables to store the key.

### Launch Development Server
To compile and hot-reload the project, while developing, run either of the following commands:
```
npm run serve
npm run serve:open
```
The `serve:open` command opens the project in your default browser. The `serve` command just launches the development server (useful for when you need to restart the server).

### Build for Production
To compile and minify the project for production:
```
npm run build
```

### Testing
To run all the tests for the project:
```
npm run test
```

To run only the unit tests:
```
npm run test:unit
```

To lint and fix the files:
```
npm run lint
```


### Customize Configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
