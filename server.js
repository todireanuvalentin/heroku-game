let express = require('express');
let app = express();

// set the view engine to ejs

app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(8081);
console.log('Server is listening on port localhost:8080');