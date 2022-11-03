import React from "react";
import { Routes, Route } from "react-router-dom";
import BlogPage from "./Screen/BlogPage";
import "./App.css";
import FoodBlog from "./Screen/FoodBlog";
import FrontPage from "./Screen/FrontPage";
import Login from "./Screen/Login";
import FrontPageUser from "./Screen/FrontPageUser";
import { userId_toantim } from "./Backend/LocalStorage";
import WritePost from "./Screen/WritePost";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<FrontPage />}></Route>
      <Route exact path="/user/:id" element={<FrontPageUser />}></Route>
      <Route exact path="/food-blog" element={<BlogPage />}></Route>
      <Route exact path="/food-blog/:id" element={<FoodBlog />}></Route>
      <Route exact path="/user/:id/write_post" element={<WritePost />}></Route>
      <Route exact path="/Authentication" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
