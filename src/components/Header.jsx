import reactImg from "../assets/react-core-concepts.png";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];
import "./Header.css";

function genRamdomDescription(max) {
  return reactDescriptions[Math.floor(Math.random() * (max + 1))];
}

function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {genRamdomDescription(2)} React concepts you will need for almost any
        app you are going to build!
      </p>
    </header>
  );
}

export { Header };
