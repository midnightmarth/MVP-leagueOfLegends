
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/LeagueShit');


//Schema's
let summonerInfo = new mongoose.Schema({
    _id: Number,
    name: String,
    profileIconId: Number,
    revisionDate: Number,
    summonerLevel: Number
})
let summModel = mongoose.model('summonerInfo', summonerInfo);

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
  const newQuery = new summModel()
  newQuery._id=info.id
  newQuery.name=info.name
  newQuery.profileIconId= info.profileIconId
  newQuery.revisionDate= info.revisionDate
  newQuery.summonerLevel= info.summonerLevel
  
    newQuery.save(err=>{
      if(err){
        console.log('Something happened when saving to DB! (probable a duplicate): ',err);
      }
    })
    
}

module.exports.saveSumm = saveSumm;