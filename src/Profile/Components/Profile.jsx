import React from "react";
import PropTypes from "prop-types";

//import "./App.css";

function Profile(props ) {
  
  return (
    <>
      <div>{props.children}</div>
      <div>
        <h1>{props.fullName}</h1>
        <p>{props.bio}</p>
        <br />
        <h4>{props.profession}</h4>
      </div>
      <button onClick={() => props.handleName(props.fullName)}>Alert</button>
    </>
  );
}
Profile.defaultProps = {
  fullName :"3eljia",
  bio:"gghhghhhhh",
  profession :"dagek tall"
}
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};

export default Profile;
