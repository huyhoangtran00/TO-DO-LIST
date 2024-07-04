var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var taskRouter = require('./routes/Task')
const connectDB = require('./database/connect.js')




var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
require('dotenv').config();
const port = process.env.PORT
const mongo_url = process.env.MONGO_URL


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//routing
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/task', taskRouter)



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).send("404 NOT FOUND")
 
 
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');

});



const start = async () => {

  try {
    await connectDB(mongo_url)

    
  app.listen(port, ()=> {

    console.log("running")
  })

  } catch (error) {
    console.log(error)
  }
}


start()



module.exports = app;
