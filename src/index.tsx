/* SPDX-License-Identifier: Apache-2.0 */
import "react-tooltip/dist/react-tooltip.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
