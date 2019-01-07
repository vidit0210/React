//Import React and Ract Dom
// We can use import MYREACT from "react"
import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <label class="label" for="name">
        Enter Name
      </label>
      <input type="text" id="name" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        Submit
      </button>
    </div>
  );
};

//Take that React Component and place it on Browser
ReactDOM.render(<App />, document.querySelector("#root"));
