
var http = require('http'),
	fs = require('fs'),
	path = require('path'),
	url = require('url'),
	querystring = require('querystring'),
	calculator = require('./calculator');

var staticExtns = ['.html', '.xml', '.js', '.jpg', '.png', '.css', '.img', '.json', '.txt'];
function isStatic(resourceName){
	return staticExtns.indexOf(path.extname(resourceName)) !== -1;
}

var server = http.createServer(function(req, res){
	var urlObj = url.parse(req.url, true);
	if (isStatic(urlObj.pathname)){
		var resource = path.join(__dirname, urlObj.pathname);
		if (!fs.existsSync(resource)){
			res.statusCode = 404;
			res.end();
			return;
		}
		fs.createReadStream(resource).pipe(res);
	} else if (urlObj.pathname === '/calculator' && req.method === 'GET'){
		var reqData = urlObj.query,
			n1 = parseInt(reqData.n1, 10),
			op = reqData.op,
			n2 = parseInt(reqData.n2, 10),
			result = calculator[op](n1, n2);
		res.write(result.toString());
		res.end();
	} else if (urlObj.pathname === '/calculator' && req.method === 'POST'){
		var inputData = '';
		req.on('data', function(chunk){
			inputData += chunk;
		});
		req.on('end', function(){
			var reqData = querystring.parse(inputData),
				n1 = parseInt(reqData.n1, 10),
				op = reqData.op,
				n2 = parseInt(reqData.n2, 10),
				result = calculator[op](n1, n2);
			res.write(result.toString());
			res.end();
		})
		
	} else {
		res.statusCode = 404;
		res.end();
	}
});
server.listen(8080);

/*
serveStatic.js
dataParser.js
calculatorHandler.js
notFoundHandler.js

*/