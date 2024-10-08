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

  const APIKEY="123-123-1231111";
  console.log(APIKEY);

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
