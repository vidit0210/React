import React from "react";
const approveString = "Approve";
const rejectString = "Reject";
const ApproveCard = props => {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">{approveString}</div>
          <div className="ui basic red button">{rejectString}</div>
        </div>
      </div>
    </div>
  );
};

export default ApproveCard;
