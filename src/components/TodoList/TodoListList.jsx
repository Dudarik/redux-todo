import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const Todolistlist = () => {
  const state = useSelector((state) => state.todos);

  return (
    <div>
      {state.map((todo) => (
        <Todo key={todo.id} id={todo.id} text={todo.text} date={todo.date} />
      ))}
    </div>
  );
};

export default Todolistlist;
