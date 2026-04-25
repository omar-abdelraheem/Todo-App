import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useTodos } from "../contexts/TodosContext.jsx";

export default function SnakeBar() {
  const { open, SnackbarText, snackbarSeverity } = useTodos();
  return (
    <div>
      <Snackbar open={open}>
        <Alert
          variant="filled"
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {SnackbarText}
        </Alert>
      </Snackbar>
    </div>
  );
}
