var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/public/pages/" + "index.html" );
})

app.get('/', function (req, res) {
  // res.send('Hello World');
   res.sendFile( __dirname + "/public/pages/" + "login.html" );
})

app.get('/landing', function (req, res) {
  // res.send('Hello World');
   res.sendFile( __dirname + "/public/pages/" + "landing.html" );
})

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      username:req.query.username,
      password:req.password
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
