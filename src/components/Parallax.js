import React, { Component } from "react";
import { Parallax } from "react-parallax";

export default class ParallaxExample extends Component {
  render() {
    return (
      // Farthest 5
      <div
        style={{
          height: "1500vh",
          width: "200%",
          overflow: "hidden",
          backgroundColor: "lightblue"
        }}
      >
        <Parallax
          strength={800}
          bgImage="/Water-Wave-4.png"
          bgImageSizes="cover"
          bgStyle={{ backgroundPosition: "center top" }}
          bgWidth="100%"
          bgHeight="1700vh"
          style={{
            height: "1700vh",
            width: "100%" //200%
          }}
        >
          {/* 4 */}
          <div
            style={{
              height: "1700vh",
              width: "100%",
              overflow: "hidden"
            }}
          >
            <Parallax
              strength={700}
              bgImage="/Water-Wave-4.png"
              bgWidth="100%" //500%
              bgHeight="1700vh"
              style={{
                height: "1700vh",
                width: "100%" //150
              }}
            >
              {/* 3 */}
              <div
                style={{
                  height: "1700vh",
                  width: "100%",
                  overflow: "hidden"
                }}
              >
                <Parallax
                  strength={450}
                  bgImage="/Water-Wave-4.png"
                  bgWidth="200%" //200%
                  bgHeight="1700vh"
                  style={{
                    height: "1700vh",
                    width: "100%" //200%
                  }}
                >
                  {/* 2 */}
                  <div
                    style={{
                      height: "400vh",
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
                          height: "250vh",
                          width: "100%",
                          overflow: "hidden"
                        }}
                      >
                        <Parallax
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
