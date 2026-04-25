import "./App.css";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TodoList from "./components/TodoList.jsx";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { TodosProvider } from "./contexts/TodosContext.jsx";
import SnakeBar from "./components/SnakeBar.jsx";

function App() {
  return (
    <TodosProvider>
      <Container maxWidth="md" className="app-container">
        <div className="app">
          <div className="wraper">
            <SnakeBar />
            <Typography
              sx={{ fontSize: { xs: "3rem", lg: "5rem" } }}
              variant="h1"
              gutterBottom
            >
              To-Do List{" "}
              <EventNoteIcon
                sx={{
                  fontSize: { xs: "3rem", lg: "5rem" },
                  verticalAlign: "middle",
                }}
              />
            </Typography>
            <TodoList />
          </div>
        </div>
      </Container>
    </TodosProvider>
  );
}

export default App;
