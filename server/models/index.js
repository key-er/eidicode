var database = require('../../database/index.js')
var connection = database.connection;
var Search = database.Search;
var Repo = database.Repo;

let save = (dataToInsertInDB, callback) => {

  Search.sync()
    .then(() => {
      Search.bulkCreate(dataToInsertInDB, () => {
        updateOnDuplicate:["id"]
      });
      callback('data added to the database successfully :] \n');
    })
    .catch(function(err) {
      callback(err);
    });
  }
let query = (callback) => {
  Search.sync()
  .then(function () {
    connection.query("SELECT * FROM `users` ORDER BY stargazers_count DESC LIMIT 25;")
      .then((repos) => {
        callback(JSON.stringify(repos[0]))
      });
  });
}

module.exports.save = save;
module.exports.query = query;