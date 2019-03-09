const FTP = require('./FTP.js');
const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();

const config = {
	user: FTP.user,
	password: FTP.pass,
	host: FTP.host,
	port: 21,
	localRoot: './dist',
	remoteRoot: '/',
	include: ['.*', '*', 'dist/*'],
	deconsteRemote: true,
	forcePasv: true,
};

ftpDeploy.deploy(config)
	.then(res => console.log('deployed: ', res))
	.catch(err => console.log('deploy error: ', err));