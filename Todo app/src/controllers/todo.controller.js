import Todo from '../models/todo.model.js';

export const getTodos = (req, res, next) => {
  try {
    res.status(200).json(Todo.getAll());
  } catch (error) {
    next(error);
  }
};

export const createTodo = (req, res, next) => {
  try {
    const todo = Todo.create(req.body.title);
    res.status(201).json(todo);
  } catch (error) {
    next(error);
  }
};

export const updateTodo = (req, res, next) => {
  try {
    const todo = Todo.update(req.params.id, req.body.completed);
    res.status(200).json(todo);
  } catch (error) {
    next(error);
  }
};

export const deleteTodo = (req, res, next) => {
  try {
    Todo.remove(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
