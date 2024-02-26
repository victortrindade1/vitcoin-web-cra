import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import MyRoutes from "./routes";

import { store } from "./store";

import { GlobalStyle } from "styles/global";
import theme from "styles/theme";

function App() {
  let persistor = persistStore(store);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MyRoutes />
        </PersistGate>
      </Provider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
