import React from "react";

//Import Library Here!
//Chartjs
// import { Doughnut } from "react-chartjs-2";
//Parallax
// import { Parallax } from "react-parallax";
//Slick
// import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
// import "./slick-fixes.css";
//Particles
// import Particles from "react-particles-js";

export default class TestRun extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <div>Paste Code Here!!!</div>;
  }
}

//Chartjs/////////////////////////////////////////////////////////////

{
  /* <div style={{ width: "33%" }}>
        <Doughnut
          data={{
            labels: ["Chocolate", "Vanilla", "Chocolate Chip Mint", "Sherbet"],
            datasets: [
              {
                label: "Random Display of Numbers",
                data: [10, 30, 70, 90],
                backgroundColor: ["#85412D", "#E7D1AC", "#81AC91", "#FFBD62"]
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
      </div> */
}

//Parallax/////////////////////////////////////////////////////////////

{
  //   <div
  //   style={{
  //     height: "100%",
  //     width: "100%"
  //   }}
  // >
  //   <div style={{ height: "100vh", backgroundColor: "lightgrey" }}>
  //     Scroll Down!!!
  //   </div>
  //   <Parallax
  //     blur={1}
  //     strength={700}
  //     bgImage="/picture.jpg"
  //     style={{
  //       height: "40%",
  //       display: "flex",
  //       justifyContent: "center",
  //       alignItems: "center"
  //     }}
  //   >
  //     <div style={{ color: "white", fontSize: "25px" }}>
  //       Text In the Middle of the Parallax
  //     </div>
  //   </Parallax>
  //   <div style={{ height: "100vh", backgroundColor: "lightgrey" }}>
  //     Scroll Up!!!
  //   </div>
  // </div>
}

//Slick///////////////////////////////////////////////////////////////////

{
  /* <Slider
centerMode={true}
slidesToShow={3}
swipeToSlide={true}
focusOnSelect={true}
>
<div
  style={{
    width: "100%"
  }}
>
  <img
    src="dog3.jpg"
    alt="dog"
    style={{ borderRadius: "500px", width: "60%", margin: "auto" }}
  />
</div>
<div
  style={{
    width: "100%"
  }}
>
  <img
    src="dog4.gif"
    alt="dog"
    style={{ borderRadius: "500px", width: "60%", margin: "auto" }}
  />
</div>
<div
  style={{
    width: "100%"
  }}
>
  <img
    src="dog6.gif"
    alt="dog"
    style={{ borderRadius: "500px", width: "60%", margin: "auto" }}
  />
</div>
<div
  style={{
    width: "100%"
  }}
>
  <img
    src="dog5.gif"
    alt="dog"
    style={{ borderRadius: "500px", width: "60%", margin: "auto" }}
  />
</div>
</Slider> */
}

//Particles////////////////////////////////////////////////////////////////////

{
  /* <div
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
        value: 20,
        density: {
          enable: true,
          value_area: 500
        }
      },

      shape: {
        type: "circle",
        stroke: {
          color: "black",
          width: 5
        }
      },
      line_linked: {
        shadow: {
          enable: true,
          color: "black"
        }
      },
      move: {
        direction: "none",
        enable: true,
        random: true,
        speed: 12,
        straight: false
      }
    }
  }}
  width="100%"
  height="90vh"
/>
</div> */
}
