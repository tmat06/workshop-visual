import React from "react";
import Particles from "react-particles-js";
import { Dropdown, Radio } from "semantic-ui-react";

export default class ParticlesJS extends React.Component {
  constructor() {
    super();
    this.state = {
      numberVal: 20,
      colorVal: "#333",
      shapeVal: "circle",
      speedVal: 12,
      directionVal: "none",
      bounce: "out",
      strokeWidthVal: 5
    };
  }
  handleParticles(particle, val) {
    if (particle === "numberVal") {
      if (val > 50) {
        val = 50;
      } else if (val < 0) {
        val = 0;
      }
    }
    this.setState({ [particle]: val });
  }

  handleDrop(particle, { value }) {
    this.setState({ [particle]: value });
  }

  handleBounce() {
    this.state.bounce === "out"
      ? this.setState({ bounce: "bounce" })
      : this.setState({ bounce: "out" });
  }

  render() {
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
                  color: this.state.colorVal,
                  width: this.state.strokeWidthVal
                }
              },
              line_linked: {
                shadow: {
                  enable: true,
                  color: this.state.colorVal
                }
              },
              move: {
                direction: this.state.directionVal,
                enable: true,
                random: true,
                speed: this.state.speedVal,
                straight: false
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
          {/* NUMBER */}
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
              aria-describedby="inputGroup-sizing-default"
              aria-label="Sizing example input"
              className="form-control"
              onChange={e => this.handleParticles("numberVal", e.target.value)}
              placeholder="20"
              type="number"
              value={this.state.numberVal}
            />
          </div>
          {/* SHAPE */}
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
              name="Shape"
              onChange={(e, data) => this.handleDrop("shapeVal", data)}
              options={[
                { value: "circle", text: "circle" },
                { value: "edge", text: "edge" },
                { value: "polygon", text: "polygon" },
                { value: "star", text: "star" },
                { value: "triangle", text: "triangle" }
              ]}
              selection
              text={this.state.shapeVal}
              value={this.state.shapeVal}
            />
          </div>
          {/* COLOR */}
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
              type="text"
            />
          </div>
          {/* SPEED */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center"
            }}
          >
            <h3>Speed</h3>
            <input
              className="form-control"
              onChange={e => this.handleParticles("speedVal", e.target.value)}
              placeholder="12"
              type="number"
              value={this.state.speedVal}
            />
          </div>
          {/* DIRECTION */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center"
            }}
          >
            <h3>Direction</h3>

            <Dropdown
              name="Direction"
              onChange={(e, data) => this.handleDrop("directionVal", data)}
              options={[
                { value: "top", text: "top" },
                { value: "top-right", text: "top-right" },
                { value: "right", text: "right" },
                { value: "bottom-right", text: "bottom-right" },
                { value: "bottom", text: "bottom" },
                { value: "bottom-left", text: "bottom-left" },
                { value: "left", text: "left" },
                { value: "top-left", text: "top-left" },
                { value: "none", text: "none" }
              ]}
              selection
              text={this.state.directionVal}
              value={this.state.directionVal}
            />
          </div>
          {/* STROKE WIDTH */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center"
            }}
          >
            <h3>Stroke Width</h3>
            <input
              className="form-control"
              onChange={e =>
                this.handleParticles("strokeWidthVal", e.target.value)
              }
              placeholder="5"
              type="number"
              value={this.state.strokeWidthVal}
            />
          </div>
        </div>
      </div>
    );
  }
}
