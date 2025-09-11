import { configureStore, createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const alltodo = localStorage.getItem("todos");
    return alltodo ? JSON.parse(alltodo) : [];
  } catch (err) {
    console.error("Could not load state", err);
    return [];
  }
};

const saveState = (state) => {
  try {
    const alltodo = JSON.stringify(state);
    localStorage.setItem("todos", alltodo);
  } catch (err) {
    console.error("Could not save state", err);
  }
};
const todoSlice = createSlice({
  name: "todos",
  initialState: loadState(),
  reducers: {
    addtodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggletodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    deletetodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    updatetodo: (state, action) => {
      const { id, newText } = action.payload; 
      const todo = state.find((todo) => todo.id === id);
      if (todo) todo.text = newText;
    },
  },
});

export const { addtodo, toggletodo, deletetodo, updatetodo } =
  todoSlice.actions;

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});

store.subscribe(() => {
  saveState(store.getState().todos);
});
export default store;
