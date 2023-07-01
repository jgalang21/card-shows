import React from "react";
import Card from "./components/Card";
import Intro from "./components/Intro";
import "./App.css";
import data from "./data/data";

function App() {
  const shows = data.map((item) => {
    return <Card key={item.id} coverImg={item.coverImg} {...item}/>;
  });

  return (
    <div className="container">
      <h1 className="header">Wisconsin Card Shows</h1>
      <Intro />
      {shows}
    </div>
  );
}

export default App;
