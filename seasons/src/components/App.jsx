import React, { Component } from 'react';
import Season from './SeasonDisplay'
class App extends Component {
    state = {}
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        )
        return (
            <div>
                <h1>Hi there</h1>
            </div>
        );
    }
}

export default App;