import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogPage from "./Screen/BlogPage";
import "./App.css";

import FrontPage from "./Screen/FrontPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<FrontPage />}></Route>
        <Route exact path="/food-blog" element={<BlogPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
