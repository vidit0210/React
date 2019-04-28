import React, { Component } from "react";
import Season from "./SeasonDisplay";
class App extends Component {
  constructor(props) {
    super();
    this.props = props;
  }
  state = {
    lat: null,
    errorMessage: ""
  };
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error:{this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          <Season lat={this.state.lat} />
        </div>
      );
    }
    return <div>Loading!</div>;
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude
        });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
}

export default App;
