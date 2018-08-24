var http = require('http'); // (1)
exports.handler = function(event, context) {
  http.get('<apiURL>',  // (2)
  function(res) {  //(3)
    var body = '';
        res.on('data', function(d) {
            body += d;
        });
        res.on('end', function() {
            context.succeed(body.replace(/\n|\r/g, "")); //Remove and newline/linebreak chars
        });
  }).on('error', function(e) {
    console.log("Error: " + e.message);
    context.done(null, 'FAILURE');
  });
}
