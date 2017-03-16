var fs = require('fs');

var stream = fs.createReadStream('test.txt', {encoding : 'utf8'});
//open, data, end, close, error

/*fs.readFile('test.txt', { encoding : 'utf8'}, function(err, fileContents){
	if (err){
		console.log('something went wrong ', err);
		return;
	}
	console.log('-------------------- file begin ------------------');
	console.log(fileContents);	
	console.log('-------------------- file end ------------------');
});*/

stream.on('open', function(){
	console.log('-------------------- file begin ------------------');
});
stream.on('data', function(chunk){
	console.log(chunk);	
});
stream.on('end', function(){
	console.log('-------------------- file end ------------------');
});
stream.on('error', function(err){
	console.log('something went wrong ', err);
});

