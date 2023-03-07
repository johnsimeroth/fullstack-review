import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';

const App = () => {

  const [repos, setRepos] = useState([]);
  useEffect(() => {update()}, [])



  const search = (term) => {
    axios.post('/repos', {username: term})
      .then(response => update());

  }

  const update = () => {
    axios.get('/repos')
    .then(newRepos => setRepos(newRepos.data))
    .catch(err => console.error(err));
  }



  return (
    <div>
      <h1>Github Fetcher</h1>
      <Search onSearch={search}/>
      <RepoList repos={repos}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));