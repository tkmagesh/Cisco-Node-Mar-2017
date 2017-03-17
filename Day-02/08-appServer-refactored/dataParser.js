var url = require('url');

module.exports = function(req, res){
	req.urlObj = url.parse(req.url, true);
}