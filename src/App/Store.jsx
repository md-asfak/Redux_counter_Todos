import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../Slice/CounterSlices";
import { TodoSlice } from "../Slice/TodosSlices";
// import todoReducer from "./CreateSlice";

export const store = configureStore({
  reducer: { todos: TodoSlice },
});

// counter: CounterSlice,
