var Todo = require('../models/todo');

module.exports = {
  index,
  show,
  new: newTodo
};

function newTodo(req, res) {
  res.render('todos/new');
}

function show(req, res) {
  res.render('todos/show', {
    todo: Todo.getOne(req.params.id),
    todoNum: parseInt(req.params.id) + 1
  });
}

function index(req, res) {
  res.render('todos/index', {
    todos: Todo.getAll(),
    time: req.time
  });
}