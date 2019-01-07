import React from "react";
import ReactDOM from "react-dom";
import CD from "./CommentDetail";
import fake from "faker";
import AC from "./approveCard";

const App = () => {
  return (
    <div className="ui container comments">
      <AC>
        <div>
          <h4>Warning</h4>
          Are your Sure you want to do this?
        </div>
      </AC>
      <AC>
        <CD
          author="Vidit"
          timeAgo="Today at 2am"
          content="Well explained"
          avatar={fake.image.avatar()}
        />
      </AC>

      <AC>
        <CD
          author="Rahul"
          timeAgo="Today at 2am"
          content="I agree!"
          avatar={fake.image.avatar()}
        />
      </AC>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
