import React from "react";
import { Routes, Route } from "react-router-dom";
import BlogPage from "./Screen/BlogPage";
import "./App.css";
import FoodBlog from "./Screen/FoodBlog";
import FrontPage from "./Screen/FrontPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<FrontPage />}></Route>
      <Route exact path="/food-blog" element={<BlogPage />}></Route>
      <Route exact path="/food-blog/:id" element={<FoodBlog />}></Route>
    </Routes>
  );
}

export default App;
