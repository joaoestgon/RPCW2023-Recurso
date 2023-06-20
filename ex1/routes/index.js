var express = require('express');
var router = express.Router();

var repairController = require('../controllers/repair');

router.get('/', function(req, res, next) {
  if (req.query.year) {
    repairController.listByYear(req.query.year)
      .then(data => res.jsonp(data))
      .catch(err => res.status(500).jsonp(err));
  }
  else if (req.query.marca) {
    repairController.listByMarca(req.query.marca)
      .then(data => res.jsonp(data))
      .catch(err => res.status(500).jsonp(err));
  }
  else {
    repairController.list()
      .then(data => res.jsonp(data))
      .catch(err => res.status(500).jsonp(err));
  }
})

router.get('/matriculas', function(req, res, next) {
  repairController.listMatriculas()
    .then(data => res.jsonp(data))
    .catch(err => res.status(500).jsonp(err));
});

router.get('/interv', function(req, res, next) {
  repairController.listInterv()
    .then(data => res.jsonp(data))
    .catch(err => res.status(500).jsonp(err));
});

router.get('/:id', function(req, res, next) {
  repairController.getById(req.params.id)
    .then(data => res.jsonp(data))
    .catch(err => res.status(500).jsonp(err));
});

router.post('/', function(req, res, next) {
  repairController.add(req.body)
    .then(data => res.jsonp(data))
    .catch(err => res.status(500).jsonp(err));
});

router.delete('/:id', function(req, res, next) {
  repairController.delete(req.params.id)
    .then(data => res.jsonp(data))
    .catch(err => res.status(500).jsonp(err));
});

module.exports = router;
