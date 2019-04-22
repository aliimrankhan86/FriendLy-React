import React from "react";

var LikeStyles = {
  fontSize: 30,
  color: "Blue",
  textAlign: "center",
  marginRight: 20,
  cursor: "pointer"
};

function Like() {
  return <i style={LikeStyles} className="fa fa-thumbs-o-up" />;
}

export default Like;
