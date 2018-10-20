import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.jsx';
import PriorSumms from './PriorSumms.jsx'
import axios from 'axios';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      summoner: ''
    }
    this.summNames= []
  }

  async search(summ){
    console.log('Searching for: ',summ)
      try{
      return await axios.get('http://localhost:1128/newSumm', {params: summ})
      
      }catch(err){
        console.log('err when Searching for summoner!:', err);
      }
  }

  render(){
    return (<div>
      <h1>League of Intel!</h1>
      <Search onSearch={this.search.bind(this)} />
      {/* <button onClick={this.search}>Search Summoner Name</button> */}
      <PriorSumms />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));