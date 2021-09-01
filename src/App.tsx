import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { Routes } from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { CssBaseline } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: { main: "#1f6feb" },
    secondary: { main: "#161b22" },
    background: {
      default: "#0d1117",
    },
    text: {
      secondary: "#848d96",
    },
  },
  typography: {
    h3: {
      fontSize: 32,
    },
    h5: {
      fontSize: 16,
    },
  },
});
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
