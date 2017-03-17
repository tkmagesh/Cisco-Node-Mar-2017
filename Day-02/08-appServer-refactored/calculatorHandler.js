var calculator = require('./calculator'),
	querystring = require('querystring');

module.exports = function(req, res, next){
	var urlObj = req.urlObj;
	if (urlObj.pathname === '/calculator'){
		var reqData = req.method === 'POST' ? req.body : urlObj.query,
			n1 = parseInt(reqData.n1, 10),
			op = reqData.op,
			n2 = parseInt(reqData.n2, 10),
			result = calculator[op](n1, n2);
		res.write(result.toString());
		res.end();
	} else {
		next();
	}
}