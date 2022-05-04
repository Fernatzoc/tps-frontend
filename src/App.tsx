import { Provider } from "react-redux";
import { store } from "./state";
import { AppRouter } from "./routes/AppRouter";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme } from "./theme";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
