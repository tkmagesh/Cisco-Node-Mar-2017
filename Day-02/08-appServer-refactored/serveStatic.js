var path = require('path'),
	fs = require('fs');

var staticExtns = ['.html', '.xml', '.js', '.jpg', '.png', '.css', '.img', '.json', '.txt'];
function isStatic(resourceName){
	return staticExtns.indexOf(path.extname(resourceName)) !== -1;
}

module.exports = function(staticResourcePath){
	return function(req, res, next){
		if (isStatic(req.urlObj.pathname)){
			var resource = path.join(staticResourcePath, req.urlObj.pathname);
			if (!fs.existsSync(resource)){
				res.statusCode = 404;
				res.end();
				return;
			}
			fs.createReadStream(resource).pipe(res);
		} else {
			next();
		}
	};
}