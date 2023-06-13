import "./App.css";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useGetKiamoniBlocks } from "./kiamoni";
import theme from "../theme";
import { Provider } from "./components";

function App() {
  const getKiamoniBlocks = useGetKiamoniBlocks();
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            {getKiamoniBlocks().map(({ name, component: Component, props }) => (
              <Route
                key={name}
                path={`blocks/${name.match(/\d+/)}`}
                element={
                  <Provider>
                    <Component {...props} />
                  </Provider>
                }
              />
            ))}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
