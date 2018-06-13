const express = require('express');
const mockdata = require('../data.json')
const getReposByUsername = require('../helpers/github.js').getReposByUsername
const models = require('./models/index.js')

let app = express();

app.use(express.static(__dirname + '/../client/dist'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/repos', function (req, res) {
    console.log('servers post route')
    let username = req.body.username;
    getReposByUsername(username, (err, repoInfo) => {
      jRepoInfo = JSON.parse(repoInfo)
      console.log(jRepoInfo)
      models.save(jRepoInfo.items, (err) => {
        console.log('ERR while saving: ', err)
      })
      res.send(jRepoInfo.items)
    })

});

app.get('/repos', function (req, res) {
  console.log('servers  get route')
  models.query(function(err, data) {
    res.send(data)
  })
});

let port = 8899;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

