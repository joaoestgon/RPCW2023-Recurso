var express = require('express');
var router = express.Router();

var repairController = require('../controllers/repair');

function extractDistinctModelos(jsonData) {
  const modelosSet = new Set();
  
  for (const entry of jsonData) {
    if (entry.viatura && entry.viatura.modelo) {
      modelosSet.add(entry.viatura.modelo);
    }
  }
  
  return Array.from(modelosSet);
}

router.get('/', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  repairController.list()
    .then(values => {
      res.render('index', { vs : values, d : data});
    })
    .catch(err => {
      res.render('error',{error: err})
    })
});

router.get('/:id', function(req, res, next) {
  repairController.getById(req.params.id)
    .then(value => {
      res.render('registo', { v : value});
    })
    .catch(err => {
      res.render('error', {error: err})
    })
});

router.get('/marca/:marca', function(req, res, next) {
  repairController.listByMarca(req.params.marca)
    .then(value => {
      modelos = extractDistinctModelos(value)
      console.log(modelos)
      res.render('marca', { vs : value, m: modelos});
    })
    .catch(err => {
      res.render('error', {error: err})
    })
});



module.exports = router;
