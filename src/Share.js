import React from "react";

function Share() {
  var shareStyles = {
    textAlign: "center",
    marginLeft: 20,
    marginRight: 20,
    fontSize: 30,
    color: "Blue",
    cursor: "pointer"
  };
  return <i style={shareStyles} className="fa fa-share-square" />;
}

export default Share;
