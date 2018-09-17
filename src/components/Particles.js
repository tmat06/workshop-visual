import React from "react";
import Particles from "react-particles-js";
import { Dropdown } from "semantic-ui-react";

export default class ParticlesJS extends React.Component {
  constructor() {
    super();
    this.state = {
      numberVal: 20,
      colorVal: "#333",
      shapeVal: "circle"
    };
  }
  handleParticles(particle, val) {
    console.log(val);
    if (particle === "numberVal") {
      if (val > 50) {
        val = 50;
      } else if (val < 0) {
        val = 0;
      }
    }
    this.setState({ [particle]: val });
  }

  render() {
    const options = [
      { key: "Circle", value: "circle", text: "Circle" },
      { key: "Square", value: "square", text: "Square" }
    ];
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          backgroundColor: "lightblue",
          overflow: "hidden"
        }}
      >
        <Particles
          params={{
            particles: {
              number: {
                value: this.state.numberVal,
                density: {
                  enable: true,
                  value_area: 500
                }
              },
              shape: {
                type: this.state.shapeVal,
                stroke: {
                  width: 5,
                  color: this.state.colorVal
                }
              },
              line_linked: {
                shadow: {
                  enable: true,
                  color: this.state.colorVal,
                  blur: 5
                }
              },
              move: {
                enable: true,
                speed: 12,
                direction: "none",
                random: true,
                straight: false,
                bounce: true
              }
            }
          }}
          width="100%"
          height="90vh"
        />
        <div
          style={{
            height: "20vh",
            width: "100%",
            backgroundColor: "#D3D3D3",
            boxShadow: "1px -3px 2px #333",
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center"
            }}
          >
            <h3>Number</h3>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="20"
              onChange={e => this.handleParticles("numberVal", e.target.value)}
              type="number"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center"
            }}
          >
            <h3>Shape</h3>
            <Dropdown
              search
              selection
              placeholder="Circle"
              onChange={e => this.handleParticles("shapeVal", e.target)}
              options={options}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center"
            }}
          >
            <h3>Color</h3>

            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="#333"
              onChange={e => this.handleParticles("colorVal", e.target.value)}
              type="string"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center"
            }}
          >
            <h3>Number</h3>
            <div className="ui focus input">
              <input
                placeholder="20"
                onChange={e => this.handleParticles("number", e.target.value)}
                type="number"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
