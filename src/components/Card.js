import React from "react";
import "../App.css";
import pin from "../images/locationpin.png"
import comingSoon from "../images/coming_soon.jpg"

function Card(props) {
 
  const showImg = props.coverImg ? (
    <img className="card--img" src={require(`../images/${props.coverImg}`)} alt="card component" />
  ) : (
    <img className="card--img" src={comingSoon} />
  );


  return (
    <div className="card">
      {showImg}
      <div className="card--details">

        <div className="card--info" > 
          <img src={pin} /> 
          <h2>{props.title}</h2>
          <h3>{props.description}</h3>
          <h3>Where: {props.location} </h3>
          <h3>{props.address}</h3>
          <h3>When: {props.dates}</h3>
          <h3> Cost: {props.admission} </h3>
          {props.link && <a href={props.link}>Link with more info here</a>}
        </div>

      </div>

    </div>
  );
}

export default Card;
