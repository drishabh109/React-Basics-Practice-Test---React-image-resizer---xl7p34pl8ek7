import React from "react";
import "../styles/App.css";
import image from "../image.jpeg";

const App = () => {
  return (
    <div id="main">
      <img src={image.jpeg} id="resizable-img" alt="" />
    </div>
  );
};

export default App;
