import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import EditIcon from "@mui/icons-material/Edit";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTodos } from "../contexts/TodosContext.jsx";

const Todo = ({
  text,
  id,
  isCompleted,
  handleClickOpen,
  handleClickOpenEdit,
}) => {
  const { showSnakeBar, setSnackbarText, setSnackbarSeverity, dispatch } =
    useTodos();

  const checkHandler = (id) => {
    dispatch({ type: "CHECK_TODO", payload: { id, isCompleted } });
    showSnakeBar();
    setSnackbarSeverity("success");
    setSnackbarText(isCompleted ? " Checked as not yet" : " Todo Completed");
  };

  // dialog edit state

  return (
    <div className="todo">
      <div className="todo-content">
        <Typography
          variant="h5"
          sx={{ textDecoration: isCompleted ? "line-through" : "none" }}
        >
          {text}
        </Typography>
      </div>
      <Stack direction="row" spacing={1}>
        <IconButton
          onClick={() => checkHandler(id)}
          disableFocusRipple
          disableRipple
          sx={{
            backgroundColor: isCompleted ? "#38b000" : "white",
            border: isCompleted ? "3px solid white" : "3px solid #38b000",
            color: isCompleted ? "white" : "#38b000",
            "@media (min-width:900px)": {
              "&:hover": {
                backgroundColor: isCompleted ? "#34a003ff" : " #eeeeeeff",
                transform: "scale(1.05)",
                color: isCompleted ? "#eeeeeeff " : " #34a003ff",
                border: isCompleted
                  ? "3px solid #eeeeeeef"
                  : "3px solid #34a003ff",
              },
            },
          }}
        >
          <CheckRoundedIcon />
        </IconButton>
        <IconButton
          onClick={() => handleClickOpenEdit(id, text)}
          sx={{
            backgroundColor: "#8d99ae",
            border: "3px solid white",
            color: "white",
            "@media (min-width:900px)": {
              "&:hover": {
                bgcolor: "white",
                transform: "scale(1.05)",
                color: "#8d99ae",
                border: "3px solid #8d99ae",
              },
            },
          }}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          onClick={() => handleClickOpen(id)}
          sx={{
            backgroundColor: "#d90429",
            border: "3px solid white",
            color: "white",
            "@media (min-width:900px)": {
              "&:hover": {
                bgcolor: "white",
                transform: "scale(1.05)",
                color: "#d90429",
                border: "3px solid #d90429",
              },
            },
          }}
        >
          <DeleteOutlineRoundedIcon />
        </IconButton>
      </Stack>
    </div>
  );
};
export default Todo;
