var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pagina principal (descripcion)' });
});

router.get('/General', function(req, res, next) {
  res.render('index', { title: 'Tabla general' });
});

module.exports = router;
