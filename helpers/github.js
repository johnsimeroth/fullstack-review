const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    baseURL: 'https://api.github.com/users',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  return axios.get(`/${username}/repos`, options);
    // .then((response) => callback(null, response))
    // .catch((err) => callback(err));

}

module.exports.getReposByUsername = getReposByUsername;