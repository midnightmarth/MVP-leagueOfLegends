const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(express.static(__dirname + '/../react-client/dist'));

let port = 1128

app.get('/', function(req, res){
  
})

app.listen(port, function(){
  console.log(`listening on port: ${port}`)
})