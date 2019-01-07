import React from "react";
import ReactDOM from "react-dom";
import CD from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CD />
      <CD />
      <CD />
      <CD />
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
