import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { StyledEngineProvider } from "@mui/material";
import App from "./App";
import store from "./Store/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        {" "}
        <App />
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>,
);
