# Movie Listing UI

Front End Challenge for [Zone Digital](https://www.zonedigital.com/)

### [See Live Preview Here](https://movieslist.ddev.ro/)

### [See Challenge Description Here](https://zone.github.io/frontend/movie-listing-ui)

## Project Setup

### Install Project
To install the project you'll need to have NodeJS installed on your machine and run the following command:
```
npm install
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

### Deploying
If you wish to deploy to a server via FTP, you can do so by running:
```
npm run deploy
```
For the `deploy` command to work, you need to add an `ftp.js` file at the root of the project with the following content:
```
const FTP = {
	user: 'your_ftp_username',
	pass: 'your_ftp_password',
	host: 'your_ftp_host',
	root: '/', // your ftp directory
	port: 21, // your ftp port
};

module.exports = FTP;
```

### Customize Configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
