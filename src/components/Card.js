import React from "react";
import "../App.css";

function Card(props) {
  return (
    <div className="card">
        
      <img className="card--img" src={require(`../images/${props.coverImg}`)} alt="card component" />
      <h2>{props.title}</h2>
      <h3>{props.description}</h3>


    </div>
  );
}

export default Card;
