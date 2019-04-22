import React from "react";

// class Avatar extends React.Component {
//   render() {
//     return <h1 onClick={this.test}>Avatar Loaded</h1>;
//   }
// }

// Stateless component like the following avatar
// better in performance than class component

function Avatar() {
  var avatarStyles = {
    borderRadius: 300
  };
  return (
    <img
      style={avatarStyles}
      src="https://pbs.twimg.com/profile_images/1093813737050509312/SkJ_0D_v_400x400.jpg"
      alt="me"
    />
  );
}

export default Avatar;
