import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainApp from "./App";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </React.StrictMode>
);
