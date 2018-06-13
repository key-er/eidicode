var database = require('../../database/index.js')
var connection = database.connection;
var Repo = database.Repo;


let save = (dataToInsertInDB, callback) => {


  Repo.sync()
    .then(() => {
      // console.log('***********************')
      // console.log(dataToInsertInDB)
      Repo.bulkCreate(dataToInsertInDB);
      callback('data added to the database successfully :] \n');
    })
    .catch(function(err) {
      callback(err);
    });
}

let query = (callback) => {

  Repo.sync()
  .then(function () {
    Repo.findAll()
      .then((repos) => {
        console.log(repos)
        callback(JSON.parse(repos));
      });
  });
}

module.exports.save = save;
module.exports.query = query;