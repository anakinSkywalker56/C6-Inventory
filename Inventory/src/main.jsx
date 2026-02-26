import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";

import Front from "./Pages/A_Front/FrontPage.jsx";
import Create from "./Pages/B_Create/CreateDB.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Front />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  </BrowserRouter>
);
