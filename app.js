const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const bodyParser = require('body-parser')
var express = require('express');
var cors = require('cors')
var app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(awsServerlessExpressMiddleware.eventContext())

app.get('/', function(req, res) {

  console.log('about to send', req)
  console.log('about to send', req.apiGateway)
  console.log('about to send', req.apiGateway.context)
  console.log('about to send', req.apiGateway.context)
  console.log('about to send', req.apiGateway.context.callbackWaitsForEmptyEventLoop)

  req.apiGateway.context.callbackWaitsForEmptyEventLoop = false

  res.send({
    "Output": "Hello Peepers!"
  });

  console.log('sent 1')

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
