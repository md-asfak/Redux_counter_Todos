import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = {
//   todos: [{ id: 1, text: "Hello World..😂" }],
// };

export const TodoSlice = createSlice({
  name: "todos",
  initialState: [{ id: 1, text: "hello World" }],
  reducers: {
    addTodo(state, action) {
      const newTodo = {
        id: nanoid(),
        text: action.payload,
      };
      state.push(newTodo);
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
