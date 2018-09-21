import React, { Component } from "react";
import { Doughnut, Line, Bar, Bubble, HorizontalBar } from "react-chartjs-2";

import "semantic-ui-css/semantic.min.css";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default class ChartJS extends Component {
  constructor() {
    super();
    this.state = {
      graph: "doughnut"
    };
  }

  graphSelection(graphChoice) {
    this.setState({ graph: graphChoice });
  }

  renderGraph() {
    switch (this.state.graph) {
      case "doughnut":
        return (
          <div
            style={{
              alignItems: "center",
              display: "flex",
              height: "80%",
              justifyContent: "center"
            }}
          >
            <div style={{ width: "33%" }}>
              <Doughnut
                data={{
                  labels: [
                    "Chocolate",
                    "Vanilla",
                    "Chocolate Chip Mint",
                    "Sherbet"
                  ],
                  datasets: [
                    {
                      label: "Random Display of Numbers",
                      data: [
                        getRandomInt(50, 300),
                        getRandomInt(50, 300),
                        getRandomInt(50, 300),
                        getRandomInt(50, 300)
                      ],
                      backgroundColor: [
                        "#85412D",
                        "#E7D1AC",
                        "#81AC91",
                        "#FFBD62"
                      ]
                    }
                  ]
                }}
                options={{
                  elements: {
                    arc: {
                      borderColor: "#333",
                      borderWidth: 1
                    }
                  },
                  maintainAspectRatio: true
                }}
              />
            </div>
            <div style={{ width: "33%" }}>
              <Doughnut
                data={{
                  labels: [
                    "Dogs",
                    "Cats",
                    "Hamster",
                    "Snake",
                    "Bird",
                    "Horse",
                    "Fish"
                  ],
                  datasets: [
                    {
                      label: "Random Display of Numbers",
                      data: [
                        getRandomInt(50, 300),
                        getRandomInt(50, 300),
                        getRandomInt(50, 300),
                        getRandomInt(50, 300),
                        getRandomInt(50, 300),
                        getRandomInt(50, 300),
                        getRandomInt(50, 300)
                      ],
                      backgroundColor: [
                        "#FFFCBC",
                        "#FFE4B3",
                        "#E8C7A3",
                        "#FFD8C0",
                        "#E8B3A3",
                        "#FFBAB3",
                        "#D99EB6"
                      ]
                    }
                  ]
                }}
                options={{ legend: { display: false }, cutoutPercentage: 0 }}
              />
            </div>
            <div style={{ width: "33%" }}>
              <Doughnut
                data={{
                  labels: [
                    "Dogs",
                    "Cats",
                    "Hamster",
                    "Snake",
                    "Bird",
                    "Horse",
                    "Fish"
                  ],
                  datasets: [
                    {
                      label: "Random Display of Numbers",
                      data: [
                        getRandomInt(50, 300),
                        getRandomInt(50, 300),
                        getRandomInt(50, 300),
                        getRandomInt(50, 300),
                        getRandomInt(50, 300),
                        getRandomInt(50, 300),
                        getRandomInt(50, 300)
                      ],
                      backgroundColor: [
                        "#FFFCBC",
                        "#FFE4B3",
                        "#E8C7A3",
                        "#FFD8C0",
                        "#E8B3A3",
                        "#FFBAB3",
                        "#D99EB6"
                      ]
                    }
                  ]
                }}
                options={{
                  cutoutPercentage: 80,
                  legend: {
                    position: "left"
                  },
                  elements: {
                    arc: {
                      borderColor: "#444",
                      borderWidth: 5
                    }
                  },
                  maintainAspectRatio: true
                }}
              />
            </div>
          </div>
        );
      case "bar":
        return (
          <div
            style={{
              alignItems: "center",
              display: "flex",
              height: "80%",
              justifyContent: "center"
            }}
          >
            <div style={{ width: "33%" }}>
              <Bar
                data={{
                  labels: ["Red", "Blue", "Yellow"],
                  datasets: [
                    {
                      data: [
                        getRandomInt(1, 25),
                        getRandomInt(1, 25),
                        getRandomInt(1, 25)
                      ],
                      backgroundColor: ["red", "blue", "yellow"]
                    }
                  ]
                }}
              />
            </div>
            <div style={{ width: "33%" }}>
              <HorizontalBar
                data={{
                  labels: [
                    "CocaCola",
                    "Pepsi",
                    "Dr. Pepper",
                    "Sprite",
                    "Root Beer",
                    "Fanta",
                    "Mountain Dew"
                  ],
                  datasets: [
                    {
                      data: [
                        getRandomInt(1, 100),
                        getRandomInt(1, 100),
                        getRandomInt(1, 100),
                        getRandomInt(1, 100),
                        getRandomInt(1, 100),
                        getRandomInt(1, 100),
                        getRandomInt(1, 100),
                        getRandomInt(1, 100)
                      ],
                      backgroundColor: [
                        "#CD3225",
                        "#10437A",
                        "#A80434",
                        "#17AA4F",
                        "#743810",
                        "#FFBE2C",
                        "#95C323"
                      ]
                    }
                  ]
                }}
                options={{
                  legend: { display: false },
                  scales: { barPercentage: 0.2 },
                  maintainAspectratio: false
                }}
              />
            </div>
            <div style={{ width: "33%" }}>
              <Bar
                data={{
                  labels: [
                    "Dogs",
                    "Cats",
                    "Hamster",
                    "Snake",
                    "Bird",
                    "Horse",
                    "Fish"
                  ],
                  datasets: [
                    {
                      label: [
                        "Dogs",
                        "Cats",
                        "Hamster",
                        "Snake",
                        "Bird",
                        "Horse",
                        "Fish"
                      ],
                      data: [
                        getRandomInt(50, 300),
                        getRandomInt(50, 300),
                        getRandomInt(50, 300),
                        getRandomInt(50, 300),
                        getRandomInt(50, 300),
                        getRandomInt(50, 300),
                        getRandomInt(50, 300)
                      ],
                      backgroundColor: [
                        "#FFFCBC",
                        "#FFE4B3",
                        "#E8C7A3",
                        "#FFD8C0",
                        "#E8B3A3",
                        "#FFBAB3",
                        "#D99EB6"
                      ]
                    }
                  ]
                }}
                options={{
                  legend: { display: false },
                  elements: {
                    rectangle: {
                      label: "bar2",
                      borderWidth: 5,
                      borderColor: "#333"
                    }
                  }
                }}
              />
            </div>
          </div>
        );
      case "line":
        return (
          <div
            style={{
              alignItems: "center",
              display: "flex",
              height: "80%",
              justifyContent: "center"
            }}
          >
            <div style={{ width: "33%" }}>
              <Line
                data={{
                  labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"
                  ],
                  datasets: [
                    {
                      steppedLine: true,
                      backgroundColor: "red",
                      borderWidth: 5,
                      borderColor: "red",
                      pointBackgroundColor: "green",
                      pointBorderColor: "green",
                      pointBorderWidth: 5,
                      label: "Hours I Spend Coding",
                      fill: false,
                      data: [
                        getRandomInt(20, 100),
                        getRandomInt(20, 100),
                        getRandomInt(20, 100),
                        getRandomInt(20, 100),
                        getRandomInt(20, 100),
                        getRandomInt(20, 100),
                        getRandomInt(20, 100),
                        getRandomInt(20, 100),
                        getRandomInt(20, 100),
                        getRandomInt(20, 100),
                        getRandomInt(20, 100),
                        getRandomInt(20, 100)
                      ]
                    }
                  ],
                  options: {
                    legend: { display: false },
                    maintainAspectRatio: false
                  }
                }}
              />
            </div>
            <div style={{ width: "33%" }}>
              <Line
                data={{
                  labels: [
                    "Week 1",
                    "Week 2",
                    "Week 3",
                    "Week 4",
                    "Week 5",
                    "Week 6",
                    "Week 7",
                    "Week 8",
                    "Week 9",
                    "Week 10",
                    "Week 11",
                    "Week 12",
                    "Week 13"
                  ],
                  datasets: [
                    {
                      label: "Love For Caffeine at DevMountain",
                      data: [
                        getRandomInt(1, 50),
                        getRandomInt(1, 50),
                        getRandomInt(1, 50),
                        getRandomInt(1, 50),
                        getRandomInt(1, 50),
                        getRandomInt(1, 50),
                        getRandomInt(1, 50),
                        getRandomInt(1, 50),
                        getRandomInt(1, 50),
                        getRandomInt(1, 50),
                        getRandomInt(1, 50),
                        getRandomInt(1, 50),
                        getRandomInt(1, 50)
                      ]
                    }
                  ],
                  options: {
                    maintainAspectRatio: false
                  }
                }}
              />
            </div>
            <div style={{ width: "33%" }}>
              <Line
                data={{
                  borderColor: "#333",
                  borderWidth: 5,
                  labels: ["Morning", "Noon", "Afternoon", "Night"],
                  datasets: [
                    {
                      label: "Energy I Have Throughout The Day",
                      data: [
                        getRandomInt(1, 100),
                        getRandomInt(1, 100),
                        getRandomInt(1, 100),
                        getRandomInt(1, 100),
                        getRandomInt(1, 100),
                        getRandomInt(1, 100),
                        getRandomInt(1, 100),
                        getRandomInt(1, 100),
                        getRandomInt(1, 100),
                        getRandomInt(1, 100),
                        getRandomInt(1, 100)
                      ],
                      backgroundColor: "blue"
                    }
                  ],
                  options: {
                    maintainAspectRatio: true
                  }
                }}
              />
            </div>
          </div>
        );
      case "bubble":
        return (
          <div
            style={{
              alignItems: "center",
              display: "flex",
              height: "80%",
              justifyContent: "center"
            }}
          >
            <div style={{ width: "33%" }}>
              <Bubble
                data={{
                  datasets: [
                    {
                      label: "Microscopic Germs",
                      fill: false,
                      lineTension: 0.1,
                      backgroundColor: "rgba(75,192,192,0.4)",
                      borderColor: "rgba(75,192,192,1)",
                      borderCapStyle: "butt",
                      borderDash: [],
                      borderDashOffset: 0.0,
                      borderJoinStyle: "miter",
                      pointBorderColor: "rgba(75,192,192,1)",
                      pointBackgroundColor: "#fff",
                      pointBorderWidth: 1,
                      pointHoverRadius: 5,
                      pointHoverBackgroundColor: "rgba(75,192,192,1)",
                      pointHoverBorderColor: "rgba(220,220,220,1)",
                      pointHoverBorderWidth: 2,
                      pointRadius: 1,
                      pointHitRadius: 10,
                      maintainAspectRatio: false,
                      data: [
                        {
                          x: getRandomInt(50, 300),
                          y: getRandomInt(50, 300),
                          r: getRandomInt(50, 300)
                        },
                        {
                          x: getRandomInt(50, 300),
                          y: getRandomInt(50, 300),
                          r: getRandomInt(50, 300)
                        },
                        {
                          x: getRandomInt(50, 300),
                          y: getRandomInt(50, 300),
                          r: getRandomInt(50, 300)
                        }
                      ]
                    }
                  ]
                }}
              />
            </div>
            <div style={{ width: "33%" }}>
              <Bubble
                data={{
                  datasets: [
                    {
                      label: "Planets",
                      fill: true,
                      lineTension: 0.1,
                      backgroundColor: [
                        "green",
                        "blue",
                        "black",
                        "red",
                        "yellow"
                      ],
                      borderWidth: 20,

                      maintainAspectRatio: false,
                      data: [
                        {
                          x: getRandomInt(1, 100),
                          y: getRandomInt(1, 100),
                          r: getRandomInt(1, 100)
                        },
                        {
                          x: getRandomInt(1, 100),
                          y: getRandomInt(1, 100),
                          r: getRandomInt(1, 100)
                        },
                        {
                          x: getRandomInt(1, 100),
                          y: getRandomInt(1, 100),
                          r: getRandomInt(1, 100)
                        },
                        {
                          x: getRandomInt(1, 100),
                          y: getRandomInt(1, 100),
                          r: getRandomInt(1, 100)
                        },
                        {
                          x: getRandomInt(1, 100),
                          y: getRandomInt(1, 100),
                          r: getRandomInt(1, 100)
                        }
                      ]
                    }
                  ]
                }}
              />
            </div>
            <div style={{ width: "33%" }}>
              <Bubble
                data={{
                  datasets: [
                    {
                      label: "Bouncy Balls",
                      fill: true,
                      lineTension: 0.1,
                      backgroundColor: [
                        "#67696E",
                        "#738D9C",
                        "#F4EEE2",
                        "#354751",
                        "#EED069"
                      ],
                      borderWidth: 1,
                      maintainAspectRatio: false,
                      data: [
                        {
                          x: getRandomInt(1, 100),
                          y: getRandomInt(1, 100),
                          r: getRandomInt(50, 50)
                        },
                        {
                          x: getRandomInt(1, 100),
                          y: getRandomInt(1, 100),
                          r: getRandomInt(50, 50)
                        },
                        {
                          x: getRandomInt(1, 100),
                          y: getRandomInt(1, 100),
                          r: getRandomInt(50, 50)
                        },
                        {
                          x: getRandomInt(1, 100),
                          y: getRandomInt(1, 100),
                          r: getRandomInt(50, 50)
                        },
                        {
                          x: getRandomInt(1, 100),
                          y: getRandomInt(1, 100),
                          r: getRandomInt(50, 50)
                        }
                      ]
                    }
                  ]
                }}
              />
            </div>
          </div>
        );
    }
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
        {this.renderGraph()}
        <div
          style={{
            alignItems: "center",
            backgroundColor: "#D3D3D3",
            boxShadow: "1px -3px 2px #333",
            display: "flex",
            height: "20%",
            justifyContent: "space-around",
            width: "100%"
          }}
        >
          <div>
            <button
              className="ui button"
              role="button"
              onClick={() => this.graphSelection("doughnut")}
            >
              Doughnut/Pie
            </button>
          </div>
          <div>
            <button
              className="ui button"
              role="button"
              onClick={() => this.graphSelection("bar")}
            >
              Bar
            </button>
          </div>
          <div>
            <button
              className="ui button"
              role="button"
              onClick={() => this.graphSelection("line")}
            >
              Line
            </button>
          </div>
          <div>
            <button
              className="ui button"
              role="button"
              onClick={() => this.graphSelection("bubble")}
            >
              Bubble
            </button>
          </div>
        </div>
      </div>
    );
  }
}

{
  /* <Bar data={this.state.chart} />
        <button onClick={() => this.handleRandomize(this.state.chart)}>
          Randomize
        </button>
        <h2>Click on Graph</h2>
        <Line
          onElementsClick={() => this.handleRandomize(this.state.line)}
          data={this.state.line}
          options={{
            animation: {
              onProgress: function(animation) {
                console.log(animation.animationObject.currentStep);
                if (animation.animationObject.currentStep > 30) {
                  // this.setState({ testVar: 100 });
                }
              }
            }
          }}
        />

        <Bubble data={this.state.bubble} />
        <button onClick={() => this.handleBubble()}>Randomize</button> */
}
