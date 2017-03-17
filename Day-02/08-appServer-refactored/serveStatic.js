var path = require('path'),
	fs = require('fs');

var staticExtns = ['.html', '.xml', '.js', '.jpg', '.png', '.css', '.img', '.json', '.txt'];
function isStatic(resourceName){
	return staticExtns.indexOf(path.extname(resourceName)) !== -1;
}

module.exports = function(req, res){
	if (isStatic(req.urlObj.pathname)){
		var resource = path.join(__dirname, req.urlObj.pathname);
		if (!fs.existsSync(resource)){
			res.statusCode = 404;
			res.end();
			return;
		}
		//fs.createReadStream(resource).pipe(res);
		var stream = fs.createReadStream(resource);
		stream.on('open', function(){
			console.log('[serveStatic] stream open event');
		});
		stream.on('data', function(chunk){
			console.log('[serveStatic] stream data event');
			res.write(data);
		});
		stream.on('end', function(){
			console.log('[serveStatic] stream end event');
		});
	}
};