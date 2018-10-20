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

  search(e){
    this.props.onSearch(this.state.summoner);
    e.preventDefault();
  }
  
  render(){
    return (<form>
      Enter Summoner Name<input value={this.state.value} onChange={this.onChange} />
      <button type='submit' onClick={this.search} > Search Summoner </button>
    </form>)
  }
}
export default Search;