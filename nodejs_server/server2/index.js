var express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const connection = require('./mysqlconn')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.post('/register', function(req, res, next) {
  res.send({
    message: req.body.model.username + '成功した'
  })
  connection.query('select * from users;', function(err, users) {
    if (err) {
      console.log('サインアップに関するエラー： ' + err)
    }
    connection.query('insert into users set ? ;', {
      username: req.body.model.username,
      email: req.body.model.email,
      password: req.body.model.password,
      fullname: req.body.model.fullname
    })
  })
})

app.listen(3000, function() {
  console.log('Server started on port 3000...')
})
