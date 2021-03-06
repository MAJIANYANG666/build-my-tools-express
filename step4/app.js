//自己写
var express = require('./lib/express')
var path = require('path')
var bodyParser = require('./lib/body-parser')

var app = express()


app.use(bodyParser)
app.use(express.static(path.join(__dirname, 'static')))


app.use(function(req, res, next) {
  console.log('middleware 1')
  next()
})

app.use(function(req, res, next) {
  console.log('middleware 12')
  next()
})


app.use('/hello', function(req, res){
  console.log('/hello..')
  res.send('hello world')
})

app.use('/getWeather', function(req, res){
  res.send({url:'/getWeather', city: req.query.city})
})


app.use('/search', function(req, res){
  res.send(req.body)
})
app.use(function(req, res){
  res.send(404, 'haha Not Found')
})

module.exports = app