import "./index.css";
import React from "react";
import App from "./App.jsx";
import Modal from "react-modal";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Set the root element for modals
Modal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
