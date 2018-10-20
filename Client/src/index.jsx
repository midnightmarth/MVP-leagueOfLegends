import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.jsx';
import axios from 'axios';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      summoner: '',
      sumData: {},
      hasSearched: false
    }
    // this.summNames= []
  }

 search(summ){
    console.log('Searching for: ',this.props)
      try{
        let data = axios.get('http://localhost:1128/newSumm', {params: summ}).then(()=>{
            this.setState({sumData: data})
            this.setState({hasSearched: true})
          }
        )
      
      
      }catch(err){
        console.log('err when Searching for summoner!:', err);
      }
  }

  render(){
    return (<div>
      <h1>League of Intel!</h1>
      <Search onSearch={this.search.bind(this)} sumData={this.state.sumData} hasSearched={this.state.hasSearched}/>

    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));