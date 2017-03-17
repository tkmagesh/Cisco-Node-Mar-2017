var calculator = require('./calculator'),
	querystring = require('querystring');

module.exports = function(req, res){
	var urlObj = req.urlObj;
	if (urlObj.pathname === '/calculator' && req.method === 'GET'){
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
		
	}
}