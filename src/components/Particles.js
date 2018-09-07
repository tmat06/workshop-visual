import React from "react";
import Particles from "react-particles-js";

export default class ParticlesJS extends React.Component {
  render() {
    return (
      <Particles
        params={{
          particles: {
            number: {
              value: 20,
              density: {
                enable: true,
                value_area: 800
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 5,
                color: "#ff44ff"
              }
            },
            line_linked: {
              shadow: {
                enable: true,
                color: "red",
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
        height="100vh"
      />
    );
  }
}
