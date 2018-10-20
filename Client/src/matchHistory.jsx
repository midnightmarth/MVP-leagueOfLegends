import React from 'react'
import matchHistoryComponent from './matchHistoryComponent.jsx'

class matchHistory extends React.Component{
  constructor(props){
    super(props);

  }



  render(){
    return (
      <div>Match History
        <div><matchHistoryComponent/></div>
      </div>
      
    )
  }
}

export default matchHistory;