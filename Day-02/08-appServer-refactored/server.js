
var http = require('http'),
	path = require('path'),
	chalk = require('chalk'),
	dataParser = require('./dataParser'),
	serveStatic = require('./serveStatic'),
	calculatorHandler = require('./calculatorHandler'),
	notFoundHandler = require('./notFoundHandler'),
	app = require('./app');

app.use(dataParser);
app.use(function(req, res, next){
	console.log(chalk.red(req.method) + '\t' + chalk.blue(req.urlObj.pathname));
	next();
});
app.use(serveStatic(path.join(__dirname, '/public')));
app.use(calculatorHandler);
app.use(notFoundHandler);

http.createServer(app).listen(8080);
console.log(chalk.green('Server listening on port 8080!!'));