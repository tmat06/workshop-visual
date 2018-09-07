import React, { Component } from "react";
import "./App.css";
import routes from "./routes";
import SideMenu from "./components/SideMenu";
import { Motion, spring } from "react-motion";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      slide: true
    };
  }

  toggleSlide = () => {
    this.setState({ slide: !this.state.slide });
  };

  render() {
    return (
      <div className="App">
        <div style={{ height: "100vh", width: "100%" }}>{routes}</div>
        <Motion
          defaultStyle={{ x: 0, opacity: 0 }}
          style={{
            x: this.state.slide ? spring(400) : spring(0),
            opacity: this.state.slide ? spring(1) : spring(0)
          }}
        >
          {mot => {
            return <SideMenu mot={mot} toggleSlide={this.toggleSlide} />;
          }}
        </Motion>
      </div>
    );
  }
}
