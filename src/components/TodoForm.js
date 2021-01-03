import React, { useContext } from "react";
import Error from "./Error";
import { AppContext } from "../context";
import AddRoundedIcon from "@material-ui/icons/AddRounded";

const TodoForm = () => {
  const { todo, setTodo, handleSubmit, inputRef, error } = useContext(
    AppContext
  );
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        name="todo"
        value={todo}
        placeholder="todo..."
        onChange={(e) => setTodo(e.target.value)}
        ref={inputRef}
      />
      <button type="submit">
        <AddRoundedIcon />
      </button>
      {error && <Error />}
    </form>
  );
};

export default TodoForm;
