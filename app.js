var express = require('express');
var app = express();

app.get('/', function(req, res) {

  console.log('about to send')

  res.send({
    "Output": "Hello Peepers!"
  });

  console.log('sent 1', req.apitGateway)

  process.exit(1)
  console.log('sent 2')

  console.log('sent 3')

});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
