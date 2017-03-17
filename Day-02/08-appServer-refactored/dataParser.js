var url = require('url'),
	querystring = require('querystring');

module.exports = function(req, res, next){
	req.urlObj = url.parse(req.url, true);
	if (req.method === 'POST'){
		var inputData = '';
		req.on('data', function(chunk){
			inputData += chunk;
		});
		req.on('end', function(){
			req.body = querystring.parse(inputData);
			next();
		});
	} else {
		next();
	}
}