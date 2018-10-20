
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/LeagueShit')


//Schema's
let summonerInfo = new mongoose.Schema({
  summoner:{
    id: Number,
    name: String,
    profileIconId: Number,
    revisionDate: Number,
    summonerLevel: Number
  }
})
let query = mongoose.model('sommonerInfo', summonerInfo);

// let champions = new mongoose.Schema({
//   champion:{
//     id: Number,
//     name: String,
//     picture: Array,
    
//   }
// })
// let champQuery = mongoose.model('LeagueShit', champions)
//

let saveSumm = (info) =>{
  console.log('Lmao',info);
  const newQuery = {
    id: info.id,
    name: info.name,
    profileIconId: info.profileIconId,
    revisionDate: info.revisionDate,
    summonerLevel: info.summonerLevel
  }
  mongoose.

}

module.exports.saveSumm = saveSumm;