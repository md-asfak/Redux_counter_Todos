import React from "react";
import { Counter } from "./Component/Counter";
import Todos from "./Component/Todos";
import AddTodo from "./Component/AddTodo";

export default function App() {
  return (
    <div>
      <Todos />
      <AddTodo />
      <Counter />
    </div>
  );
}
