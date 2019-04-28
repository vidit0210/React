import React, { Component } from "react";
import Season from "./SeasonDisplay";
class App extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.getLatLong();
  }
  state = {
    lat: null,
    long: null,
    errorMessage: ""
  };
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Lattitude:{this.state.lat}</h1>
        <h1 style={{ textAlign: "center" }}>Longitude:{this.state.long}</h1>
        <h1 style={{ textAlign: "center" }}>Error:{this.state.errorMessage}</h1>
      </div>
    );
  }

  getLatLong() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
}

export default App;
