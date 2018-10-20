import React from 'react'
import Comment from './comment.jsx'
import axios from 'axios';

class summInfo extends React.Component{
  constructor(props){
    super(props)
    this.state ={
    }

  }

  render(){
    if(this.props.hasSearched){
      console.log('prop Data: ',this.props.sumData[0].name)
      return (
        <div>
          <div>Summoner Name: {this.props.sumData[0].name}</div>
          <div>Level: {this.props.sumData[0].summonerLevel}</div>
        </div>
        
      )
    } else{
      return(
        <div></div>
      )
    }
  }
}

export default summInfo;