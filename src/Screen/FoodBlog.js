import React from "react";
import { useParams } from "react-router-dom";
import BlogContentDisplay from "../Components/BlogContentDisplay/BlogContentDisplay";
function FoodBlog() {
  const { id } = useParams();
  return (
    <div>
      <BlogContentDisplay id={id} />
    </div>
  );
}

export default FoodBlog;
