import { ThemeProvider } from "styled-components";

import MyRoutes from "./routes";

import { GlobalStyle } from "styles/global";
import theme from "styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MyRoutes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
