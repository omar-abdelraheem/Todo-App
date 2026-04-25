import { createContext, useState, useReducer, useContext } from "react";
import { TodoReducer } from "../reducers/TodoReducer";

const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [SnackbarText, setSnackbarText] = useState(""); // Text for the Snackbar
  const [snackbarSeverity, setSnackbarSeverity] = useState("");
  const [open, setOpen] = useState(false);
  const [todosData, dispatch] = useReducer(TodoReducer, []);

  const showSnakeBar = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };

  return (
    <TodosContext.Provider
      value={{
        dispatch,
        todosData,
        open,
        setOpen,
        showSnakeBar,
        SnackbarText,
        setSnackbarText,
        snackbarSeverity,
        setSnackbarSeverity,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export const useTodos = () => {
  return useContext(TodosContext);
};
