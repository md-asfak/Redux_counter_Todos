import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../Slice/TodosSlices";

export default function AddTodo() {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos);
  return (
    <>
      <div>
        {todo.map((el) => (
          <>
            <li key={el.id}>
              <span>{el.text}</span>
              <button onClick={dispatch(removeTodo(el.id))}>Del</button>
            </li>
          </>
        ))}
      </div>
    </>
  );
}
