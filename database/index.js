var mockdata = require('../data.json')


var Sequelize = require('sequelize'); // a constructor func
var dbConfig = require('./config.js');

var connection = new Sequelize('git', dbConfig.USER, dbConfig.PASSWD, {
  host: dbConfig.HOST,
  dialect: 'mysql'
});


var Repo = connection.define('repos', {
  itemId: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
  id: Sequelize.INTEGER,
  full_name: Sequelize.STRING,
  login: Sequelize.STRING,
  stargazers_count:Sequelize.INTEGER,
  forks: Sequelize.INTEGER,
  watchers_count: Sequelize.INTEGER,
  html_url: Sequelize.STRING,
})

// create tables
Repo.sync().then(function() {
  console.log('table(s) create successfully')
}).catch(function(err) {
  console.log('ERR occured ', err)
})


//console.log(mockdata)

// Repo.bulkCreate(mockdata)
//   .then(function(gname) {
//     console.log(gname.get('full_name'));

//   })
//   .catch(function(err) {
//     console.log('err occured', err)
//   })


module.exports.connection = connection;
module.exports.Repo = Repo;





// var mockdata = require('../data.json')
// var mysql = require('mysql');
// var dbConfig = require('./config.js');

// var connection = mysql.createConnection({
//   host: dbConfig.HOST,
//   user: dbConfig.USER,
//   password: dbConfig.PASSWD,
//   database: dbConfig.DATABASE
// });

// connection.connect();

// var insert = function (msgToInsertInDB, callback) {
//   connection.query('INSERT INTO repos SET ?', msgToInsertInDB, function(err, results, fields) {
//     if (err) {
//       callback(err, null)
//     } else {
//       callback(null, 'msg added to the database successfully :] \n')
//     }
//   })

// }


// var read = function (callback) {
//   connection.query('SELECT * FROM repos', function(err, results, fields) {
//     if (err) {
//       callback(err);
//     } else {
//         callback(results);
//     }
//   });
// }


// insert(mockdata, function(err, res) {
//   console.log(err, res)
// })


// connection.end();

// module.exports.connection = connection;

