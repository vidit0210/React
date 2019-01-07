//Import React and Ract Dom
// We can use import MYREACT from "react"
import React from "react";
import ReactDOM from "react-dom";

const buttonText = "Click me";
function getBUttonText() {
  return "Click on me!";
}
const App = () => {
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Name
      </label>
      <input type="text" id="name" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {getBUttonText()}
      </button>
    </div>
  );
};

//Take that React Component and place it on Browser
ReactDOM.render(<App />, document.querySelector("#root"));
