import React from "react";
import "../App.css";
import pin from "../images/locationpin.png"

function Card(props) {
  return (
    <div className="card">
        
      <img className="card--img" src={require(`../images/${props.coverImg}`)} alt="card component" />

      <div className="card--details">
        <img src={pin} style={{width: "20px", height: "30px"}}/> 
        <h2>{props.title}</h2>
        <h3>{props.description}</h3>
      </div>
     


    </div>
  );
}

export default Card;
