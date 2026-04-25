import Todo from "./Todo.jsx";
import AddTodo from "./AddTodo.jsx";
import { useState, useMemo } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Button from "@mui/material/Button";

// context import
import { useTodos } from "../contexts/TodosContext.jsx";

// dialog imports
import { forwardRef } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { blue, red } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import Slide from "@mui/material/Slide";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TodoList = () => {
  const {
    dispatch,
    todosData,
    showSnakeBar,
    setSnackbarText,
    setSnackbarSeverity,
  } = useTodos();

  const completedTodos = useMemo(() => {
    return todosData.filter((todo) => todo.isCompleted);
  }, [todosData]);
  const notYetTodos = useMemo(() => {
    return todosData.filter((todo) => !todo.isCompleted);
  }, [todosData]);
  const [displayedTodos, setDisplayedTodos] = useState("all");
  const handleChange = (event) => {
    setDisplayedTodos(event.target.value);
  };
  let todosToBeRenderd = todosData;
  if (displayedTodos === "completed") {
    todosToBeRenderd = completedTodos;
  } else if (displayedTodos === "not-yet") {
    todosToBeRenderd = notYetTodos;
  } else {
    todosToBeRenderd = todosData;
  }

  // dialog delete
  const [deleteId, setDeleteId] = useState(null);
  const [openDelete, setOpenDelete] = useState(false);
  const handleClose = () => {
    setOpenDelete(false);
  };
  const deleteTodoHandler = () => {
    dispatch({ type: "DELETE_TODO", payload: { deleteId } });
    setOpenDelete(false);
    showSnakeBar();
    setSnackbarSeverity("error");
    setSnackbarText("Todo Deleted");
  };

  const handleClickOpen = (id) => {
    setDeleteId(id);
    setOpenDelete(true);
  };

  // dialog delete

  // *****************************

  // dialog edit
  const [editId, setEditId] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);
  const handleClickOpenEdit = (id, text) => {
    setTextEdit(text);
    setEditId(id);
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const [textEdit, setTextEdit] = useState("");

  const handleEdit = (textEdit) => {
    dispatch({
      type: "EDIT_TODO",
      payload: { editId, textEdit },
    });
    showSnakeBar();
    setSnackbarText("Todo Edited");
    setSnackbarSeverity("success");
    setOpenEdit(false);
  };

  // dialog edit

  const showedTodos = todosToBeRenderd.map((todo) => (
    <Todo
      key={todo.id}
      text={todo.text}
      id={todo.id}
      isCompleted={todo.isCompleted}
      handleClickOpen={handleClickOpen}
      handleClickOpenEdit={handleClickOpenEdit}
    />
  ));
  return (
    <>
      {/* dialog delete content */}
      <Dialog
        slots={{
          transition: Transition,
        }}
        keepMounted
        open={openDelete}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you really want to delete this todo?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            if you delete this todo you will not be able to get it back
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              backgroundColor: "blue",
              color: "white",
              fontWeight: "bold",
              "&:hover": { backgroundColor: blue[700] },
            }}
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            sx={{
              backgroundColor: "red",
              color: "white",
              fontWeight: "bold",
              "&:hover": { backgroundColor: red[700] },
            }}
            onClick={() => deleteTodoHandler()}
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      {/* dialog delete content */}

      {/* dialog edit content */}
      <Dialog
        open={openEdit}
        onClose={handleCloseEdit}
        slots={{
          transition: Transition,
        }}
        keepMounted
      >
        <DialogTitle>Edit ToDo</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="todo"
            name="text"
            label="Todo update"
            type="text"
            fullWidth
            variant="standard"
            value={textEdit}
            onChange={(e) => {
              const value = e.target.value;
              setTextEdit(value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && textEdit.trim() !== "") {
                e.preventDefault();
                handleEdit(textEdit);
              }
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            style={{
              backgroundColor: "#0249c4ff",
              fontWeight: "700",
              color: "white",
            }}
            onClick={handleCloseEdit}
          >
            Cancel
          </Button>
          <Button
            style={{
              backgroundColor: "#8d99ae",
              fontWeight: "bold",
              color: "white",
            }}
            disabled={textEdit.trim() === ""}
            onClick={() => handleEdit(textEdit)}
          >
            Edit
          </Button>
        </DialogActions>
      </Dialog>
      {/* dialog edit content */}
      <div className="todo-list">
        <ToggleButtonGroup
          exclusive
          aria-label="text alignment"
          value={displayedTodos}
          onChange={handleChange}
        >
          <ToggleButton value="all" aria-label="left aligned">
            all
          </ToggleButton>
          <ToggleButton value="completed" aria-label="centered">
            completed
          </ToggleButton>
          <ToggleButton value="not-yet" aria-label="right aligned">
            not yet
          </ToggleButton>
        </ToggleButtonGroup>{" "}
        {showedTodos}
        <AddTodo />
      </div>
    </>
  );
};
export default TodoList;
