import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

import "./styles.css";
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="profileimage.jpeg" alt="cody condon" />;
}

function Intro() {
  return (
    <div>
      <h1>Cody Condon</h1>
      <p>
        My name is cody condon, i am a front end developer specializing in
        react.
      </p>
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="react" color="#123456" />
      <Skill skill="html+css" color="blue" />
      <Skill skill="javascript" color="yellow" />
      <Skill skill="java" color="orange" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
