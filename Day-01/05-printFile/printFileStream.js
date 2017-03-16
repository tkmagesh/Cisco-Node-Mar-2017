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

var readCount = 0;
stream.on('open', function(){
	console.log('-------------------- file begin ------------------');
});
stream.on('data', function(chunk){
	++readCount;
	console.log(chunk);	
});
stream.on('end', function(){
	console.log('-------------------- file end ------------------');
	console.log('readCount = ', readCount);
});
stream.on('error', function(err){
	console.log('something went wrong ', err);
});

//stream.pipe(process.stdout);




