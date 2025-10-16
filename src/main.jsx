import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CountdownProvider } from "./components/CountdownContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CountdownProvider>
        <App />
      </CountdownProvider>
    </BrowserRouter>
  </React.StrictMode>
);
