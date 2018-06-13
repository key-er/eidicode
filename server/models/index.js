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
        //console.log(JSON.stringify(repos))
        // callback(JSON.stringify(repos))
        callback(JSON.stringify(repos));
      });
  });
}

module.exports.save = save;
module.exports.query = query;