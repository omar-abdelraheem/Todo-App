import { v4 as uuidv4 } from "uuid";

export function TodoReducer(state, action) {
  switch (action.type) {
    case "SET_TODOS": {
      return action.payload;
    }
    case "ADD_TODO": {
      if (action.payload.text.trim() === "") return state; // Return current state if empty
      const newTodo = {
        id: uuidv4(),
        text: action.payload.text,
        isCompleted: false,
      };
      const updatedTodos = [...state, newTodo];

      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    }
    case "DELETE_TODO": {
      const updatedTodos = state.filter(
        (todo) => todo.id !== action.payload.deleteId,
      );

      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    }
    case "EDIT_TODO": {
      if (action.payload.textEdit.trim() === "") return state; // Return current state if empty
      const editedTodo = state.map((todo) => {
        if (todo.id === action.payload.editId) {
          return { ...todo, text: action.payload.textEdit };
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(editedTodo));
      return editedTodo;
    }
    case "CHECK_TODO": {
      const updatedTodos = state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });

      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    }
    default: {
      throw new Error("Unknown action type:" + action.type);
    }
  }
}
