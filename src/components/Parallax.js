import React, { Component } from "react";
import { Parallax } from "react-parallax";

export default class ParallaxExample extends Component {
  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <Parallax
          blur={1}
          bgImage="/picture.jpg"
          bgImageAlt="the cat"
          strength={500}
          style={{
            height: "100vh",
            width: "100%"
          }}
        >
          {/* Text can go here */}
        </Parallax>
        <div
          style={{
            height: "100vh",
            width: "100%",
            backgroundColor: "lightblue",
            display: "flex",
            padding: "200px",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <Parallax
            blur={2}
            bgImage="/duck.jpg"
            bgImageAlt="the duck"
            strength={800}
            style={{
              height: "100vh",
              width: "100%"
            }}
          >
            {/* Text can go here */}
          </Parallax>
        </div>
        <Parallax
          blur={3}
          bgImage="/balloon.jpg"
          bgImageAlt="the balloon"
          bgHeight="100vh"
          bgWidth="100%"
          strength={500}
          style={{
            height: "100vh",
            width: "100%"
          }}
        >
          {/* Text can go here */}
        </Parallax>
      </div>
    );
  }
}
