import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TodoState {
  todo: string[];
}

const initialState: TodoState = {
  todo: ["Test"],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todo = [...state.todo, action.payload];
    },
  },
});
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
