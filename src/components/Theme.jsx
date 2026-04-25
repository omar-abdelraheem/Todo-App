import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#2b2d42",
      dark: "#ff0000ff",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#d90429",
      dark: "#ba000d",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: ["Rubik, sans-serif"],
  },
});

export default theme;
