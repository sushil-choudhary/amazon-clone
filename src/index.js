import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";
import { SnackbarProvider } from "notistack";

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3} autoHideDuration={1500}>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
