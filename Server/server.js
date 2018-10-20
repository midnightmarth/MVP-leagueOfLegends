const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const db = require('./database');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(express.static(__dirname + '/../react-client/dist'));

//Routes

app.get('/summsHistory', function(req, res){
  console.log(module.exports.TOKEN)
  res.end('memes')
})

app.get('/newSumm', function(req, res){
  const summ = (req.query['0'])
 
  axios.get(`https://na1.api.riotgames.com//lol/summoner/v3/summoners/by-name/${summ}?api_key=RGAPI-d9f075d7-b88b-4b27-8165-e1bfe5a23fe5`)
  .then((res) => {
    db.saveSumm(res.data)
  })
  res.end();
})

//

let port = 1128
app.listen(port, function(){
  console.log(`listening on port: ${port}`)
})