import React, { Component } from "react";
import "./App.css";
import routes from "./routes";
import SideMenu from "./components/SideMenu";

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <div style={{ height: "100vh", width: "70%" }}>{routes}</div>
        <SideMenu />
      </div>
    );
  }
}
