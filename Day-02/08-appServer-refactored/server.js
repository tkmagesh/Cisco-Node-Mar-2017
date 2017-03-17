
var http = require('http'),
	dataParser = require('./dataParser'),
	serveStatic = require('./serveStatic'),
	calculatorHandler = require('./calculatorHandler'),
	notFoundHandler = require('./notFoundHandler');

var server = http.createServer(function(req, res){
	dataParser(req, res);
	serveStatic(req, res);
	calculatorHandler(req, res);
	notFoundHandler(req, res);
});
server.listen(8080);
