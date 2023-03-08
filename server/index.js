const express = require('express');
const axios = require('axios');
const gitHub = require('../helpers/github.js');
const db = require('../database/index.js');
let app = express();

const formatRepos = (repo) => {repo.username = repo.owner.login};

app.use(express.json());
app.use(express.static('client/dist'));

app.post('/repos', function (req, res) {
  gitHub.getReposByUsername(req.body.username)
    .then(response => {
      response.data.map(formatRepos);
      return db.save(response.data);
    })
    .then(response => {res.status(201).send()})
    .catch(err => {res.status(500).send(err)});
});

app.get('/repos', function (req, res) {
  db.get(25)
    .then(results => {res.status(200).send(results)})
    .catch(err => {res.status(500).send(err)});
});

const port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
