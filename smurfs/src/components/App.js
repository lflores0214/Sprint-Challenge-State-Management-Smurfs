import React, { Component } from "react";
import PostSmurf from "./PostSmurf"
import SmurfList from "./SmurfList"
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <PostSmurf />
        <SmurfList />
      </div>
    );
  }
}

export default App;
