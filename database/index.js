const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

const repoSchema = new mongoose.Schema({
  _id: {type: Number, unique: true},
  title: String,
  owner: String,
  stars: Number,
  forks: Number,
  watchers: Number
});

const Repo = mongoose.model('Repo', repoSchema);

const save = (repo) => {
  const newRepo = new Repo({
    _id: repo.id,
    title: repo.name,
    owner: repo.owner.login,
    stars: repo.stargazers_count,
    forks: repo.forks || repo.forks_count,
    watchers: repo.watchers || repo.watchers_count
  });
  return newRepo.save()
}

module.exports.save = save;