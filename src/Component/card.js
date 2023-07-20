import React from "react";
import "./Styles/card.css"

function Card({Title1,Title2}) {
  return (
    <>
      <div className="cardcon">
        <p className="cardtitle">{Title1}</p>
        <p className="cardcontent">{Title2}</p>
      </div>
    </>
  );
}
export default Card
