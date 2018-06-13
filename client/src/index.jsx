import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import _ from 'lodash';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  search (term) {
    // when user search for a username, it goes to data base and then gets the top 25
    console.log(`${term} was searched`);
    var term = term === '' ? 'key-er': term
    $.post('/repos', {username: term})
    .done( () => {
     console.log('getting 25 server stored repos')
     $.get("/repos", (data) => {
      console.log(data)
      this.setState({
        repos: data
        });
      });
    })
  }

  queryDB () {
   console.log('getting 25 server stored repos')
    $.get("/repos", (data) => {
      console.log(data)
      this.setState({
        repos: data
      });
    });
  }


  // to show data when a user visits a page
  componentDidMount() {
    this.queryDB()
  }


  render () {
    var debouncedSearch = _.debounce(this.search, 700)
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={debouncedSearch.bind(this)} repos={this.state.repos} />
    {/* <Search onSearch={this.search.bind(this)} repos={this.state.repos}/> */}
    {/* <TopReposList repos={this.state.repos} /> */}
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));