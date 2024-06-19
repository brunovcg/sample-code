import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DialogProvider } from "./dialog";
import GlobalStyles from "./styles";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DialogProvider portalId="dialog-root">
      <GlobalStyles />
      <App />
    </DialogProvider>
  </React.StrictMode>
);
