import React from 'react';
import TopReposList from './TopReposList.jsx'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
  }


  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={this.state.term} onChange={this.onChange.bind(this)}/>
      <button onClick={this.search.bind(this)}> Add Repos </button>
      <div>
      <ol>
        <h4> Top 25 repos based on starred counts </h4>
        {this.props.repos.map((repo) => {
          return <TopReposList repo={repo} />
        })}
      </ol>
      </div>
    </div>)
  }

}

export default Search;