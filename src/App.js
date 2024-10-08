import React from "react";
import Card from "./components/Card";
import Intro from "./components/Intro";
import "./App.css";
import data from "./data/data";
import img from "./images/clipart97096.png"

function App() {
  const shows = data.map((item) => {
    return <Card key={item.id} coverImg={item.coverImg} {...item}/>;
  });

  const userInput = req.query.input;
  res.send(`<div>${userInput}</div>`);
  
   const API_KEY="383802-03Baa";
   const user="admin";
   const password="stupid";
   console.log(API_KEY + user + password);
   const url = "jdbc:mysql://localhost/test/ " + user;

  return (
    <div className="container">
      <div className="container--header">
        <img className="container--img" src={img} />
        <h1 className="header"> Wisconsin Card Shows!!!!</h1>
      </div>
      <Intro />
      {shows}
    </div>
  );
}

export default App;
