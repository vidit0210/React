import React from "react";
import ReactDOM from "react-dom";
import CD from "./CommentDetail";
import fake from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CD
        author="Vidit"
        timeAgo="Today at 2am"
        content="Well explained"
        avatar={fake.image.avatar()}
      />
      <CD
        author="Rahul"
        timeAgo="Today at 2am"
        content="I agree!"
        avatar={fake.image.avatar()}
      />
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
