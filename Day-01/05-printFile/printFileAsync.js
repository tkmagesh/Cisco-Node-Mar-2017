var fs = require('fs');

fs.readFile('test.txt', { encoding : 'utf8'}, function(err, fileContents){
	if (err){
		console.log('something went wrong ', err);
		return;
	}
	console.log('-------------------- file begin ------------------');
	console.log(fileContents);	
	console.log('-------------------- file end ------------------');
});

