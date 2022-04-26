import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/store";

const TodoListForm = () => {
  const [todoText, setTodoText] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleClick = (e) => {
    dispatch(addTodo(todoText));
    setTodoText("");
  };
  return (
    <div>
      <input
        type='text'
        name='inputTodo'
        id='inputTodo'
        value={todoText}
        onChange={handleChange}
      />
      <button onClick={handleClick}>ADD</button>
    </div>
  );
};

export default TodoListForm;
