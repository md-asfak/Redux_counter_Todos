import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Slice/TodosSlices";
export default function Todos() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  function hundleSubmit(e) {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  }

  return (
    <>
      <form onSubmit={hundleSubmit}>
        <input
          type="text"
          placeholder="Enter Your Text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit"> Add Todo</button>
      </form>
    </>
  );
}
