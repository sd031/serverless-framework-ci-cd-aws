const serverless = require('serverless-http');
const express = require('express')
const app = express()

app.get('/version', function (req, res) {
  res.send('Serverless ci/cd v1!')
})

module.exports.handler = serverless(app);