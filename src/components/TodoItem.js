import React, { useContext } from "react";
import { AppContext } from "../context";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";
import DeleteOutlineRoundedIcon from "@material-ui/icons/DeleteOutlineRounded";

const TodoItem = ({ todos }) => {
  const { deleteTodo, checkTodo, editTodo } = useContext(AppContext);
  return (
    <div className="TodoItem">
      <p
        style={{ textDecoration: todos.isCompleted ? "line-through" : "none" }}
      >
        {todos.todo}
      </p>
      <button onClick={() => editTodo(todos.id)}>
        <EditOutlinedIcon />
      </button>
      <button onClick={() => checkTodo(todos.id)}>
        {todos.isCompleted ? <ClearRoundedIcon /> : <CheckRoundedIcon />}
      </button>
      <button onClick={() => deleteTodo(todos.id)}>
        <DeleteOutlineRoundedIcon />
      </button>
    </div>
  );
};

export default TodoItem;
