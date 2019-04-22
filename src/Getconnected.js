import React from "react";
import Like from "./Like";
import Share from "./Share";
import Add from "./Add";

function Getconnected() {
  var getconnectedStyles = {
    display: "block",
    margin: "0 auto",
    textAlign: "center"
  };
  return (
    <div style={getconnectedStyles}>
      <Like />
      <Share />
      <Add />
    </div>
  );
}

export default Getconnected;
