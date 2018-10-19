import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class App extends React.Component {

  constructor(props){
    super(props);
  }

  search(summName){

  }

  render(){
    return<div>
      <h1 id='title' style={{textalign: center}}>Enter Summoner Name</h1>
      <input></input>
    </div>
  }
}

ReactDOM.render(<App />, document.getElementById('app'));