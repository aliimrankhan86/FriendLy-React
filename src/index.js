import React from "react";
import ReactDOM from "react-dom";
import Avatar from "./Avatar";
import Username from "./Username";
import Getconnected from "./Getconnected";

import "./styles.css";

function MyApp() {
  var friendlyStyles = {
    width: 400,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 20,
    border: "0.4rem solid grey"
  };
  return (
    <div style={friendlyStyles} className="container">
      <Avatar />
      <Username />
      <Getconnected />
    </div>
  );
}

const rootElement = document.getElementById("myWrapper");
ReactDOM.render(<MyApp />, rootElement);
