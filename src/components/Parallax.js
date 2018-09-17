import React, { Component } from "react";
import { Parallax } from "react-parallax";

export default class ParallaxExample extends Component {
  render() {
    return (
      // Farthest 5
      <div
        style={{
          height: "300vh",
          width: "200%",
          overflow: "hidden",
          backgroundColor: "lightblue"
        }}
      >
        <Parallax
          strength={750}
          bgImage="/Water-Wave-4.png"
          bgImageSizes="cover"
          bgStyle={{ backgroundPosition: "center top" }}
          bgWidth="100%"
          bgHeight="1200vh"
          style={{
            height: "1200vh",
            width: "100%" //200%
          }}
        >
          {/* 4 */}
          <div
            style={{
              height: "300vh",
              width: "100%",
              overflow: "hidden"
            }}
          >
            <Parallax
              strength={600}
              bgImage="/Water-Wave-4.png"
              bgWidth="100%" //500%
              bgHeight="1000vh"
              style={{
                height: "1000vh",
                width: "100%" //150
              }}
            >
              {/* 3 */}
              <div
                style={{
                  height: "300vh",
                  width: "100%",
                  overflow: "hidden"
                }}
              >
                <Parallax
                  strength={400}
                  bgImage="/Water-Wave-4.png"
                  bgWidth="200%" //200%
                  bgHeight="700vh"
                  style={{
                    height: "700vh",
                    width: "100%" //200%
                  }}
                >
                  {/* 2 */}
                  <div
                    style={{
                      height: "300vh",
                      width: "80%",
                      overflow: "hidden"
                    }}
                  >
                    <Parallax
                      strength={250}
                      bgImage="/Water-Wave-4.png"
                      bgWidth="100%" //200%
                      bgHeight="500vh"
                      style={{
                        height: "500vh",
                        width: "120%" //200%
                      }}
                    >
                      {/* Closest 1 */}
                      <div
                        style={{
                          height: "300vh",
                          width: "100%",
                          overflow: "hidden"
                        }}
                      >
                        <Parallax
                          blur={5}
                          strength={100}
                          bgImage="/Water-Wave-4.png"
                          bgWidth="100%" //200%
                          bgHeight="400vh"
                          style={{
                            height: "300vh",
                            width: "70%" //200%,
                          }}
                        />
                      </div>
                    </Parallax>
                  </div>
                </Parallax>
              </div>
            </Parallax>
          </div>
        </Parallax>
      </div>
    );
  }
}
