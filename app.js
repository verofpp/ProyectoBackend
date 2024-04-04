const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const ejs = require('ejs');
const logger = require('morgan');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var eventosRouter = require('./routes/eventos');
var materiasRouter = require('./routes/materias');
var profesoresRouter = require('./routes/profesores');
var seccionesRouter = require('./routes/secciones');
var usuariosRouter = require('./routes/usuarios');
var authRouter = require('./routes/auth');
var auth2Router = require('./routes/auth2');
var trimestreRouter = require('./routes/trimestre');
var actividadesRouter = require('./routes/actividades');
var clasesRouter = require('./routes/clases');
var actividadesseccionRouter = require('./routes/actividadesseccion');
var asignaractividadesRouter = require('./routes/asignaractividades');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/eventos', eventosRouter);
app.use('/materias', materiasRouter);
app.use('/profesores', profesoresRouter);
app.use('/secciones', seccionesRouter);
app.use('/usuarios', usuariosRouter)
app.use('/auth', authRouter)
app.use('/auth2', auth2Router)
app.use('/trimestre', trimestreRouter)
app.use('/actividades', actividadesRouter)
app.use('/clases', clasesRouter)
app.use('/actividadesseccion', actividadesseccionRouter)
app.use('/asignaractividades', asignaractividadesRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
