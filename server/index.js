const express = require('express');
const axios = require('axios');
const gitHub = require('../helpers/github.js');
const db = require('../database/index.js');
let app = express();

const formatRepos = (repo) => (
  {
    _id: repo.id,
    title: repo.name,
    owner: repo.owner.login,
    stars: repo.stargazers_count,
    forks: repo.forks || repo.forks_count,
    watchers: repo.watchers || repo.watchers_count,
    link: repo.html_url
  }
);

app.use(express.json());
// app.use(express.urlencoded({extended: true}));
app.use(express.static('client/dist'));

app.post('/repos', function (req, res) {
  gitHub.getReposByUsername(req.body.username)
    .then(response => {
      let formattedRepos = response.data.map(formatRepos);
      return db.save(formattedRepos);
    })
    .then(response => {res.status(201).send()})
    .catch(err => {throw new Error('\n\nFailed to get repos from github and add to DB \n', err)});
});

app.get('/repos', function (req, res) {
  db.get(25)
    .then(results => {res.status(200).send(results)})
    .catch(err => {throw new Error('\n\nFailed to get top repos from DB\n', err)});
});

const port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
