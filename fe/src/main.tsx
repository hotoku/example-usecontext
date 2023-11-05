import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import config from "./config.json";
import { initializeApp } from "firebase/app";

initializeApp(config);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
