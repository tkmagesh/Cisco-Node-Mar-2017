var express = require('express');
var router = express.Router();

var taskList = [
	{id : 1, name : 'Learn Node.js', isCompleted : false},
	{id : 2, name : 'Explore Bangalore', isCompleted : true},
	{id : 3, name : 'Watch a movie', isCompleted : false},
];

/* GET home page. */
router.get('/', function(req, res, next) {
  var viewModel = {
  	tasks : taskList
  };

  res.render('tasks/list', viewModel);

});

router.get('/new', function(req, res, next){
	res.render('tasks/new');
});

router.post('/new', function(req, res, next){
	var newTask = {
		id : taskList.reduce(function(result, task) {
			return result > task.id ? result : task.id;
		}, 0) + 1,
		name : req.body.txtTaskName,
		isCompleted : false
	};
	taskList.push(newTask);
	res.redirect('/tasks');
});

router.get('/toggle/:id', function(req, res, next){
	var task = taskList.filter(function(t){
		return t.id === parseInt(req.params.id,10)
	})[0];
	task.isCompleted = !task.isCompleted;
	res.redirect('/tasks');
});

module.exports = router;