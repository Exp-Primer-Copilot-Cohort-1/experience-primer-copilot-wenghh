// Create web server

var express = require('express');
var router = express.Router();

// Import the model (comments.js) to use its database functions.
var comments = require('../models/comments.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', function(req, res) {
  comments.all(function(data) {
    var hbsObject = {
      comments: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/comments', function(req, res) {
  comments.create([
    'comment', 'date'
  ], [
    req.body.comment, req.body.date
  ], function() {
    res.redirect('/');
  });
});

router.put('/comments/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  console.log('condition', condition);

  comments.update({
    comment: req.body.comment
  }, condition, function() {
    res.redirect('/');
  });
});

router.delete('/comments/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  comments.delete(condition, function() {
    res.redirect('/');
  });
});

// Export routes for server.js to use.
module.exports = router;