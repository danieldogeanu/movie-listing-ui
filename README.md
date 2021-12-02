# Movie Listing UI

*NOTE: This repo is archived! You can clone it, but you won't be able to install it, because the dependencies are outdated and deprecated. As this is just a demo, I no longer have time to maintain it.*

Vue.JS Front End Challenge

### See Live Preview Here: [challenges.ddsv.eu/movieslist/](https://challenges.ddsv.eu/movieslist/)

## Brief
Use the TMDb API to display a list of Now Playing movies, allowing the user to filter by rating or popularity.

### Requirements:
- Display a list of movies, each showing their title, genres and poster image.
- The movies should be ordered by popularity (most popular first - `popularity` property).
- Movies should also be filterable by their rating (`vote_average` property). i.e. If rating was set to 5, you would expect to see all movies with a rating of 5 or higher.
- The input API's should be called only once.

## Project Setup

### Install Project
To install the project you'll need to have NodeJS installed on your machine and run the following command:
```
npm install
```

### Add API Key
To be able to run the app and get data from the server, you'll need an [TMDb account](https://www.themoviedb.org/account/signup), to request an API key. Once you are registered, go to `Account Settings` and click `API` in the sidebar.

Once you've got your API key, create an `api-key.js` file at the root of the project and add your API key like so:
```
export default 'your_api_key_here';
```

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
To run the unit tests:
```
npm run test:unit
```

To lint and fix the files:
```
npm run lint
```

### Deploying
If you wish to deploy to a server via FTP, you can do so by running:
```
npm run deploy
```
For the `deploy` command to work, you need to add an `ftp.js` file at the root of the project with the following content:
```
module.exports = {
	user: 'your_ftp_username',
	pass: 'your_ftp_password',
	host: 'your_ftp_host',
	root: '/', // your ftp directory
	port: 21, // your ftp port
};
```

### Customize Configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
