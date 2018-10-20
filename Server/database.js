
const mongoose = require('mongoose')

//connection
mongoose.connect('mongodb://localhost/LeagueShit');


//Schema's --------------- //
let summonerInfo = new mongoose.Schema({
    _id: Number,
    name: String,
    profileIconId: Number,
    revisionDate: Number,
    summonerLevel: Number
})

let commentInfo = new mongoose.Schema({
  commnet:{
    summonerId: Number,
    text: String,  
  }
})
// ----------------- //


let summModel = mongoose.model('summonerInfo', summonerInfo);

let findSumm = (name) => {
  //console.log('trying to find name:',name,' in db')
  return summModel.find({name: name})
}

let saveSumm = (info) =>{
  const newQuery = new summModel()
  newQuery._id=info.id
  newQuery.name=info.name
  newQuery.profileIconId= info.profileIconId
  newQuery.revisionDate= info.revisionDate
  newQuery.summonerLevel= info.summonerLevel
  
    newQuery.save(err=>{
      if(err){
        //console.log('\nSomething happened when saving to DB! (probable a duplicate): \n',err);
      }
      
    })
}


let commentModel = mongoose.model('comments', commentInfo)

let saveComment = (info) =>{
  console.log('Comment posting to DB...', info);
  //save info to database
}

module.exports.saveSumm = saveSumm;
module.exports.findSumm = findSumm;