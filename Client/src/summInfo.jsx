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
      return (
        <div>
          <div>Summoner Name: {this.props.sumData.data.name}</div>
          <div>Level: {this.props.sumData.data.summonerLevel}</div>
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