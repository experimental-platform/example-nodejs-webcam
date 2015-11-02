var express = require('express');
var app = express();
var exec = require("child_process").exec;

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  var fileName = new Date().getTime() + ".jpg";
  exec("fswebcam ./public/" + fileName, function() {
    response.send('<img src="' + fileName + '">');
  });
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
