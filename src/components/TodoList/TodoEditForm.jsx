import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editorClose, editTodo } from "../../store/store";

const TodoEditForm = ({ props }) => {
  const [editText, setEditText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setEditText(e.target.value);
  };

  const handleClick = (e) => {
    dispatch(editTodo(props.id, editText));
    dispatch(editorClose);
  };

  useEffect(() => {
    setEditText(props.text);
  }, []);

  return (
    <div>
      <input
        type='text'
        name='editText'
        id='editText'
        value={editText}
        onChange={handleChange}
      />
      <button onClick={handleClick}>SAVE</button>
    </div>
  );
};

export default TodoEditForm;
