import React from "react";
import "./ContentDisplayStyle/ContentDisplayCompoment.css";

function ContentDisplayCompoment(props) {
  return (
    <div id={props.contentID} className="contentContainer" style={props.style}>
      <div className="contentText">
        <div className="text">
          <p style={{ "font-weight": "bold", textAlign: "center" }}>
            {props.contentID}
          </p>
          <p>{props.content.contentText1}</p>
          <p>{props.content.contentText2}</p>
          <p>{props.content.contentText3}</p>
          <p>{props.content.contentText4}</p>
          <a href={props.content.linkedinURL}>{props.content.linkedinURL}</a>
          <p>{props.content.contentText5}</p>
          <a href={props.content.gitHubURl}>{props.content.gitHubURl}</a>
        </div>
      </div>
      <div className="contentImage">
        <img src={props.image}></img>
      </div>
    </div>
  );
}

export default ContentDisplayCompoment;
