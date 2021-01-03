import React, { useState, useEffect, createContext, useRef } from "react";
import { v4 as uuid } from "uuid";

export const AppContext = createContext();

const getTodoList = () => {
  let todolist = localStorage.getItem("todoList");
  if (todolist) {
    return JSON.parse(todolist);
  } else return [];
};

export const AppProvider = ({ children }) => {
  const [todos, setTodos] = useState(getTodoList());
  const [todo, setTodo] = useState("");
  const [error, setError] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState("");
  const inputRef = useRef();

  const addTodo = () => {
    if (todo.length < 1) {
      setError(true);
    } else if (!isEditing) {
      setTodos([...todos, { id: uuid(), todo, isCompleted: false }]);
      setError(false);
    } else if (isEditing) {
      setTodos(
        todos.map((singleTodo) => {
          if (singleTodo.id === editId) {
            return { ...singleTodo, todo };
          }
          return singleTodo;
        })
      );
      setError(false);
    }
    setIsEditing(false);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    setError(false);
  };

  const checkTodo = (id) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(newTodo);
    setError(false);
  };

  const editTodo = (id) => {
    inputRef.current.focus();
    setError(false);
    const todoToEdit = todos.find((todo) => todo.id === id);
    setIsEditing(true);
    setEditId(id);
    setTodo(todoToEdit.todo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();
    setTodo("");
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  return (
    <AppContext.Provider
      value={{
        todos,
        todo,
        setTodo,
        handleSubmit,
        deleteTodo,
        checkTodo,
        editTodo,
        inputRef,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
