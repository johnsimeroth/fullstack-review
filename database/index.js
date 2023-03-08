const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

const repoSchema = new mongoose.Schema({
  _id: {type: Number, unique: true},
  title: String,
  owner: String,
  stars: Number,
  forks: Number,
  watchers: Number,
  link: String
});

const Repo = mongoose.model('Repo', repoSchema);

exports.save = (repos) => {
  return Repo.create(repos);
};

exports.get = (lim) => Repo.find().sort({stars: -1}).limit(lim);