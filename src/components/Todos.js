import React, { useContext } from "react";
import { AppContext } from "../context";
import TodoItem from "./TodoItem";

const Todos = () => {
  const { todos } = useContext(AppContext);
  return (
    <div className="Todos">
      {todos.map((singleTodo) => {
        return <TodoItem key={singleTodo.id} todos={singleTodo} />;
      })}
    </div>
  );
};

export default Todos;
