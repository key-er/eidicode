var database = require('../../database/index.js')
var connection = database.connection;
var Repo = database.Repo;

let save = (dataToInsertInDB, callback) => {

  Repo.sync()
    .then(() => {
      // console.log('***********************')
      // console.log(dataToInsertInDB)
      Repo.bulkCreate(dataToInsertInDB, () => {
        updateOnDuplicate:["id"]
      });
      callback('data added to the database successfully :] \n');
    })
    .catch(function(err) {
      callback(err);
    });
  }

let query = (callback) => {
  Repo.sync()
  .then(function () {
    connection.query("SELECT * FROM `repos` ORDER BY stargazers_count DESC LIMIT 25;")
      .then((repos) => {
        callback(JSON.stringify(repos[0]))
      });
  });
}

module.exports.save = save;
module.exports.query = query;