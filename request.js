var request = require('request');
var fs = require('fs');

console.log("Getting Image\n")
request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err; 
       })
       .on('response', function (response) {
         console.log('Image received,\nResponse Status Code: ', response.statusCode, 'Response Message: ', response.statusMessage, 'Content type: ', response.headers['content-type']);
       })
       .pipe(fs.createWriteStream('./future.jpg'));