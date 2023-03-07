import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';

const App = () => {

  const [repos, setRepos] = useState([]);
  // const dbURL = '/repos'



  const search = (term) => {
    // $.ajax({
    //   type: 'POST',
    //   url: '/repos',
    //   data: {username: term},
    //   success: (data) => {
    //     console.log(`${term} was searched`)
    //     console.log(data);
    //   },
    //   error: (err) => {console.error(err)}
    // });
    axios.post('/repos', {username: term})
      .then(response => getTopRepos())
      .catch(err => console.error(err));

  }



  return (
    <div>
      <h1>Github Fetcher</h1>
      <RepoList repos={repos}/>
      <Search onSearch={search}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
//