const request = require('request');
const config = require('../config.js');

let createOptions = function(url) {
  return {
    url: url,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  }
}


let getReposByUsername = (username, cb) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  // The options object has been provided to help you out,
  // but you'll have to fill in the URL

  let options = createOptions ('https://api.github.com/search/repositories?q=user:' + username + '&sort=stars&order=desc&per_page=25&page=1')

  request(options, function(err, res, body) {
    if (err) cb(err, null);
    else cb(null, body);
  });
}





module.exports.getReposByUsername = getReposByUsername;


// References
  // https://help.github.com/articles/searching-repositories/#search-within-a-users-or-organizations-repositories
  // https://developer.github.com/v3/search/#search-repositories

// curl https://api.github.com/search/repositories?q=user:key-er&sort=stars&order=desc&per_page=2&page=1"
