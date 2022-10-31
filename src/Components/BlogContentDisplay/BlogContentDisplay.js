import React from "react";
import "./BlogContentDisplayStyle/BlogContentDisplay.css";
import ParContentDisplay from "./ParContentDisplay";
function BlogContentDisplay(props) {
  return (
    <div className="divblog_content_display_container">
      <div className="divblog_content_display_">
        <div className="divblog_content_display_navLink">navbar link </div>
        <div className="divblog_content_display">
          <div className="divblog_content_display_author_name">
            <h1 id="h1Post_name_content_display">{props.post_data.name}</h1>

            <div>
              {/* begin of author name and author image div*/}
              <div style={{ display: "flex" }}>
                <div
                  className="imagPost_author_avartar"
                  style={{ alignItems: "center" }}
                >
                  <img
                    style={{
                      marginTop: "25%",
                      zIndex: 2,
                      height: "32px",
                      width: "32px",
                      borderRadius: "50%",
                    }}
                    src={props.post_data.image}
                  ></img>
                </div>
                <div
                  style={{
                    marginLeft: "2%",
                  }}
                >
                  <p id="p1Post_author_content_display">
                    By: {props.post_data.author}
                  </p>
                </div>
              </div>
              {/* end of author name and author image div*/}
              <div style={{ display: "flex" }}>
                <p style={{ float: "left" }}>
                  POSTED:{props.post_data.post_date}
                </p>
                <p style={{ marginLeft: "4%" }}>
                  POST UPDATED:{props.post_data.post_update}
                </p>
              </div>
            </div>
          </div>
          <div>
            <ParContentDisplay post_data={props.post_data} id={props.id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogContentDisplay;
