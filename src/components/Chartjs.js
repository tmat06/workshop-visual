import React, { Component } from "react";
import { Doughnut, Line, Bar, Bubble } from "react-chartjs-2";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randArr = [
  getRandomInt(50, 300),
  getRandomInt(50, 300),
  getRandomInt(50, 300),
  getRandomInt(50, 300)
];

export default class ChartJS extends Component {
  constructor() {
    super();
    this.state = {
      testVar: 50,
      chart: {
        labels: ["Red", "Blue", "Green", "Yellow"],
        datasets: [
          {
            label: "Random Display of Numbers",
            data: [...randArr],
            backgroundColor: ["Red", "Blue", "Green", "Yellow"]
          }
        ],
        options: {
          maintainAspectRatio: true
        }
      },

      line: {
        labels: ["Red", "Blue", "Green", "Yellow"],
        datasets: [
          {
            label: "Random Display of Numbers",
            data: [...randArr],
            backgroundColor: ["Red", "Blue", "Green", "Yellow"]
          }
        ],
        options: {
          maintainAspectRatio: false
        }
      },

      bubble: {
        datasets: [
          {
            label: "My First dataset",
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
      }
    };
  }

  handleRandomize(data) {
    let newArr = [
      getRandomInt(50, 300),
      getRandomInt(50, 300),
      getRandomInt(50, 300),
      getRandomInt(50, 300)
    ];
    let newChart = Object.assign({}, data);
    newChart.datasets[0].data = [...newArr];
    this.setState({
      [data]: newChart
    });
  }

  handleBubble() {
    let newArr = [
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
    ];

    let newBubble = Object.assign({}, this.state.bubble);
    newBubble.datasets[0].data = [...newArr];
    this.setState({ bubble: newBubble });
  }

  render() {
    return (
      <div style={{ height: "100%", overflow: "auto" }}>
        <Doughnut
          data={this.state.chart}
          options={this.state.chart.options}
          height={this.state.testVar}
        />
        <Bar data={this.state.chart} />
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
        <button onClick={() => this.handleBubble()}>Randomize</button>
      </div>
    );
  }
}
