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

const save = (repo) => {
  const newRepo = new Repo({
    _id: repo.id,
    title: repo.name,
    owner: repo.owner.login,
    stars: repo.stargazers_count,
    forks: repo.forks || repo.forks_count,
    watchers: repo.watchers || repo.watchers_count,
    link: repo.html_url
  });
  return newRepo.save()
};

const get = (lim) => Repo.find().sort({stars: -1}).limit(lim);

module.exports.save = save;
module.exports.get = get;