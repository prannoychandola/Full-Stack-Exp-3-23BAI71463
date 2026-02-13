import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { HashRouter } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: { main: "#1e293b" },
    secondary: { main: "#2563eb" },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </HashRouter>
);
