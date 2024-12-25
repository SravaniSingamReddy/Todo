import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      task: "I have read English imp Questions",
      status: "Completed",
      description: "I need add clearly about this task",
    },
    { id: 2, task: "I am writing Maths HomeWork", status: "In Progress" },
    { id: 3, task: "I am Playing Circket", status: "Not Started" },
  ],
};
const name = "todo";
const todo = createSlice({
  name,
  initialState,
  reducers: {
    addToDo: (state, action) => {
      state.todos.push({
        id: nanoid(),
        task: action.payload.task,
        status: action.payload.status,
        description: action.payload.description,
      });
    },
    deleteToDo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editToDo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.task = action.payload.task;
        todo.description = action.payload.description;
        todo.status = action.payload.status;
      }
    },
  },
});

export const { addToDo, deleteToDo, editToDo } = todo.actions;
export default todo.reducer;
