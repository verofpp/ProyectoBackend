var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sistema de Gestión de la Universidad Valle del Momboy' });
});

module.exports = router;
