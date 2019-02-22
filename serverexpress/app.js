var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const mongoose = require('mongoose')
import dbConfig from './config/database';


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

mongoose.connect(dbConfig.dburl, { useNewUrlParser: true },(err)=>{
  if(err){
    console.log(err);
  }else{
    console.log('ket noi thanh cong')
  }
})


// var db = mongoose.connection;
// db.on('error',console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('connect succsess!');
// });
// const express = require('express');
// const path = require('path');
// const app = express();
// app.use(express.static(path.join(__dirname, 'build')));
// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

module.exports = app;
