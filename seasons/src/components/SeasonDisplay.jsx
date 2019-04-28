import React, { Component } from "react";
class Season extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
      return lat > 0 ? "summer" : "winter";
    } else {
      return lat < 0 ? "winter" : "summer";
    }
  };

  state = {};
  render() {
    const season = this.getSeason(this.props.lat, new Date().getMonth());
    return (
      <div>
        <h1>{season === "winter" ? "It's chilly" : "Lets Hit the Beach"}</h1>
      </div>
    );
  }
}

export default Season;
