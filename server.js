//Install express server
const express = require('express');
const path = require('path');

const app = express();

app.route('/*', function(req,res) {
  res.redirect(__dirname + '/dist/index.html')
})


// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);