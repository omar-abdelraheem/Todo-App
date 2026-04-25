import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { useTodos } from "../contexts/TodosContext.jsx";

const AddTodo = () => {
  const { dispatch, showSnakeBar, setSnackbarText, setSnackbarSeverity } =
    useTodos();

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      dispatch({ type: "SET_TODOS", payload: JSON.parse(storedTodos) });
    }
  }, [dispatch]);

  const [text, setText] = useState("");
  const addTodoHandler = () => {
    dispatch({ type: "ADD_TODO", payload: { text } });
    showSnakeBar();
    setSnackbarText(" Todo Added");
    setSnackbarSeverity("success");
    setText(""); // Clear the input field after adding the todo
  };
  return (
    <Grid container sx={{ width: "100%" }}>
      <Grid size={8}>
        <TextField
          id="outlined-basic"
          label="Add todo"
          variant="outlined"
          sx={{ width: "100%" }}
          value={text}
          onChange={(e) => {
            const value = e.target.value;
            setText(value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && text.trim() !== "") {
              addTodoHandler(text);
            }
          }}
        />
      </Grid>
      <Grid size={4}>
        <Button
          variant="contained"
          disabled={text.trim() === ""}
          sx={{
            width: "100%",
            height: "100%",
            fontSize: { xs: "1rem" },
            padding: { xs: "5px" },
            backgroundColor: "#ef233c",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "white",
              color: "#ef233c",
            },
          }}
          onClick={() => addTodoHandler(text)} // Replace with actual input value
        >
          Add ToDo
        </Button>
      </Grid>
    </Grid>
  );
};
export default AddTodo;
