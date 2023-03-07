const express = require('express');
const axios = require('axios');
const gitHub = require('../helpers/github.js');
const db = require('../database/index.js');
let app = express();

app.use(express.json());
// app.use(express.urlencoded({extended: true}));
app.use(express.static('client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  gitHub.getReposByUsername(req.body.username)
    .then(response => response.data.forEach(repo => {
      db.save(repo)
        .catch(err => {console.error('\n\nthat may have been a duplicate repo \n\n', err)});
    }))
    .then(response => {
      res.status(200).send();
    })
    .catch(err => {throw new Error('something went wrong')});

});

app.get('/repos', function (req, res) {

  // TODO - your code here!
  // This route should send back the top 25 repos

});

const port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

