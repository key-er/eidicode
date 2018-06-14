import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import Chart from './components/Chart.jsx'
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
    const data = {
      type:'bar',
      data: {
        labels: ['Ben', 'James', 'Mary', 'Abc'],
        datasets: [
          {
            label: 'Fun',
            data: [90, 12, 80, 44],
            backgroundColor: 'rgba(255, 0, 0, .2)',
            borderWidth: 1,
            borderColor: 'rgba(255, 0, 0, .4)'
          },

          {
            label: 'Smart',
            data: [90, 12, 100, 44],
            backgroundColor: 'rgba(0 0, 255, .2)',
            borderWidth: 1,
            borderColor: 'rgba(0 0, 255,.4)'
          },
        ],
      },
      options: {

    }
  }

    const myChart = document.getElementById('myChart').getContext('2d')

    // console.log()

    var debouncedSearch = _.debounce(this.search, 700)
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={debouncedSearch.bind(this)} repos={this.state.repos} />
      <Chart data={data}/>

    {/* <Search onSearch={this.search.bind(this)} repos={this.state.repos}/> */}
    {/* <TopReposList repos={this.state.repos} /> */}
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));