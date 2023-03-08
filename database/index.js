const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

const repoSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  name: String,
  username: String,
  stargazers_count: Number,
  forks: Number,
  watchers: Number,
  html_url: String
});

const Repo = mongoose.model('Repo', repoSchema);

exports.save = (repos) => Repo.create(repos);

exports.get = (lim) => Repo.find().sort({stargazers_count: -1}).limit(lim);