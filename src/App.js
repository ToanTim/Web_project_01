import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import FrontPage from "./Screen/FrontPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />}>
          <Route index element={<FrontPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
