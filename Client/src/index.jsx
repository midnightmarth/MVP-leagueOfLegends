import React from 'react';
import ReactDOM from 'react-dom';
import Search from './search.jsx';
import axios from 'axios';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      summoner: ''
    }
  }

  search(summ){
    console.log(summ)
  }

  render(){
    return<div>
      <h1>League of Intel!</h1>
      <Search onSearch={this.search.bind(this)} />
      {/* <button onClick={this.search}>Search Summoner Name</button> */}
    </div>
  }
}

ReactDOM.render(<App />, document.getElementById('app'));