//Import React and Ract Dom
// We can use import MYREACT from "react"
import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return <div>Hi There!</div>;
};
//Take that React Component and place it on Browser
ReactDOM.render(<App />, document.querySelector("#root"));
