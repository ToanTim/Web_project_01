import React from "react";
import { useParams, useLocation } from "react-router-dom";
import BlogContentDisplay from "../Components/BlogContentDisplay/BlogContentDisplay";
import NavBar from "../Components/NavBarFile/NavBar";
import "./Style/Food_Blog.css";
function FoodBlog(props) {
  /* <div>
      <BlogContentDisplay id={id} post_data={post_data} />
    </div> */

  const { id } = useParams();
  const location = useLocation();
  const post_data = location.state;
  console.log(location);
  return (
    <>
      {post_data && (
        <div className="divFood_blog_container">
          <BlogContentDisplay id={id} post_data={post_data} />
        </div>
      )}
    </>
  );
}

export default FoodBlog;
