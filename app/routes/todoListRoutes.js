module.exports = function(app) {
    const todoList = require('../controllers/todoListController');
  
    // todoList Routes
    app.route('/todos')
      .get(todoList.listAllTodos)
      .post(todoList.createTodo);
  
    app.route('/todos/:todoId')
      .get(todoList.findTodoBy(id))
      .get(todoList.readTodo)
      .put(todoList.updateTodo)
      .delete(todoList.deleteTodo);
  };

 