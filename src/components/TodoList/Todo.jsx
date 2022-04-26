import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editorVisible } from "../../store/store";

import TodoEditForm from "./TodoEditForm";

const Todo = ({ id, text, date }) => {
  const dispatch = useDispatch();
  const visibleEditor = useSelector((state) => state.editor);

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (e) => {
    dispatch(editorVisible);
  };

  return (
    <div>
      {visibleEditor ? <TodoEditForm props={{ id, text, date }} /> : null}
      <h2>
        <span>{id}: </span>
        {text}
      </h2>
      <span>{date}</span>
      <button onClick={handleEdit}>EDIT</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Todo;
