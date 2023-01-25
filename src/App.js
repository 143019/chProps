import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import "./App.css";
import Profile from "./Profile/Components/Profile";
import picture from "./image.jpg";

function App() {
  function handleName (data) {
    console.log(data)
  alert(data);
}
  return (
    <div className="App">
      <Profile handleName={handleName}
      profession = "Expert En Cyber Sécurite"
        fullName="Abid Jamila"
        bio="Jeune diplômé du Mastère « Expert En Cyber Sécurité » Dynamique, passionné par les nouvelles technologies. J’ai acquis au cours de mes études et mes premiers stages professionnels une forte sensibilité au travail en équipe, au sens de l’engagement, au respect des normes de qualité et l’importance d’une bonne réactivité."
      >
        <img src={picture} alt="profile"></img>
      </Profile>
    </div>
  );
}

export default App;
