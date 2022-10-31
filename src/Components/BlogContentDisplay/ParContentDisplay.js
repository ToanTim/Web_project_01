import React from "react";
import "./BlogContentDisplayStyle/ParContentDisplay.css";
function ParContentDisplay(props) {
  return (
    <div>
      {props.post_data.content.map((par) => (
        <div>
          <h1>{par.header}</h1>
          <img
            src={par.image}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          ></img>
          <p>{par.text1}</p>
          <p>{par.text2}</p>
          <p>{par.text3}</p>
          <p>{par.text4}</p>
          <p>{par.text5}</p>
          <p>{par.text6}</p>
        </div>
      ))}
    </div>
  );
}

export default ParContentDisplay;
