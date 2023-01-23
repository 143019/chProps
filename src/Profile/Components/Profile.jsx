import React from "react";
import PropTypes from "prop-types";

//import "./App.css";

function Profile(props) {
  function handleName() {
    alert(props.fullName);
  }
  return (
    <>
      <div>{props.children}</div>
      <div>
        <h1>{props.fullName}</h1>
        <p>{props.bio}</p>
        <br />
        <h4>{props.profession}</h4>
      </div>
      <button onClick={handleName}>Alert</button>
    </>
  );
}

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};

export default Profile;
