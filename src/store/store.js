import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./todo.slice";
const store = configureStore({
  reducer: { todo:toDoReducer },
});
export default store;
