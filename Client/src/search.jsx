import React from 'react';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.search = this.search.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state={
      summoner: ''
    }
  }
  
  onChange(e){
    this.setState({
      summoner: e.target.value
    })
  }

  search(){
    this.props.onSearch(this.state.summoner);
  }
  render(){
    return<div>
      Enter Summoner Name<input value={() => this.props.onSearch(this.state.summoner)} onChange={this.onChange} />
      <button onClick={this.search}> Search Summoner </button>
    </div>
  }
}
export default Search;