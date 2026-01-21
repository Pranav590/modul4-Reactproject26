let todos = [];
let id = 1;

class Todo {
  static getAll() {
    return todos;
  }

  static create(title) {
    if (!title) {
      throw new Error('Title is required');
    }

    const todo = { id: id++, title, completed: false };
    todos.push(todo);
    return todo;
  }

  static update(todoId, completed) {
    const todo = todos.find(t => t.id === Number(todoId));
    if (!todo) {
      throw new Error('Todo not found');
    }
    todo.completed = completed;
    return todo;
  }

  static remove(todoId) {
    const index = todos.findIndex(t => t.id === Number(todoId));
    if (index === -1) {
      throw new Error('Todo not found');
    }
    todos.splice(index, 1);
  }
}

export default Todo;
