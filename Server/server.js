const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const db = require("./database");
const key = require("../config").TOKEN;

let app = express();

app.use(express.static(__dirname + "/../client/dist"));

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static(__dirname + "/../react-client/dist"));

//Routes

app.get("/summsHistory", function(req, res) {
  console.log(module.exports.TOKEN);
  res.end("memes");
});

app.get("/newSumm", function(req, res) {
  const summ = req.query["0"];

  db.findSumm(summ).then(result => {
    if (result.length !== 0) {
      console.log("in server.js, from Database", result);
      res.json(result);
    } else {
      console.log("didnt find in Database..");
      //console.log("apiKey: ",key)
      axios
        .get(
          `https://na1.api.riotgames.com//lol/summoner/v3/summoners/by-name/${summ}?api_key=${key}`
        )
        .then(result => {
          db.saveSumm(result.data);
          db.findSumm(result.data.name).then(result1 => {
            console.log(
              "SERVER: logging result when finding after posting",
              result1
            );
            res.json(result1);
          });
        })
        .catch(err => {
          console.log("Someting went wrong when contacting API", err);
          res.end();
        });
    }
  });
});

// app.get('/SummFromDb')

app.post("/newComment", function(req, res) {
  console.log("Sending comment to db...", req.body);
  res.end;
});

//

let port = 1128;
app.listen(port, function() {
  console.log(`listening on port: ${port}`);
});
