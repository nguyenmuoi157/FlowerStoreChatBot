var express = require('express');
var router = express.Router();

const rootController = require('../controllers/index')
/* GET home page. */

router.use('/api',rootController);

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
