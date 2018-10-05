import React from "react";
import Slider from "react-slick";

//css files from slick-carousel
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./slick-fixes.css";

export default class SlickExample extends React.Component {
  constructor() {
    super();
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const settings = {
      className: "slick-center",
      centerMode: true,
      infinite: true,
      slidesToShow: 1,
      speed: 500,
      height: "100%"
    };
    return (
      <div
        id="view-container"
        style={{
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          boxSizing: "border-box"
        }}
      >
        <Slider
          {...settings}
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <div id="NeededToChangeTheNodesToCenterEachSelected">
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                backgroundImage: "radial-gradient(#333, #22556E, lightblue)"
              }}
            >
              <img
                src="dog3.jpg"
                alt="dog"
                style={{
                  borderRadius: "800px",
                  margin: "auto",
                  height: "500px",
                  width: "500px"
                }}
              />
            </div>
          </div>
          <div id="NeededToChangeTheNodesToCenterEachSelected">
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                backgroundImage: "radial-gradient(#333, #22556E, lightblue)"
              }}
            >
              <img
                src="dog4.gif"
                alt="dog"
                style={{
                  borderRadius: "800px",
                  margin: "auto",
                  height: "500px",
                  width: "500px"
                }}
              />
            </div>
          </div>
          <div id="NeededToChangeTheNodesToCenterEachSelected">
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                backgroundImage: "radial-gradient(#333, #22556E, lightblue)"
              }}
            >
              <img
                src="dog.jpg"
                alt="dog"
                style={{
                  borderRadius: "800px",
                  margin: "auto",
                  height: "500px",
                  width: "500px"
                }}
              />
            </div>
          </div>
          <div id="NeededToChangeTheNodesToCenterEachSelected">
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                backgroundImage: "radial-gradient(#333, #22556E, lightblue)"
              }}
            >
              <img
                src="dog5.gif"
                alt="dog"
                style={{
                  borderRadius: "800px",
                  margin: "auto",
                  height: "500px",
                  width: "500px"
                }}
              />
            </div>
          </div>
          <div id="NeededToChangeTheNodesToCenterEachSelected">
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                backgroundImage: "radial-gradient(#333, #22556E, lightblue)"
              }}
            >
              <img
                src="dog6.gif"
                alt="dog"
                style={{
                  borderRadius: "800px",
                  margin: "auto",
                  height: "500px",
                  width: "500px"
                }}
              />
            </div>
          </div>
          <div id="NeededToChangeTheNodesToCenterEachSelected">
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                backgroundImage: "radial-gradient(#333, #22556E, lightblue)"
              }}
            >
              <img
                src="dog7.gif"
                alt="dog"
                style={{
                  borderRadius: "800px",
                  margin: "auto",
                  height: "500px",
                  width: "500px"
                }}
              />
            </div>
          </div>
        </Slider>
        <Slider
          centerMode={true}
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              backgroundImage: "radial-gradient(#333, #22556E, lightblue)"
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
              width: "100%",
              display: "flex",
              justifyContent: "center",
              backgroundImage: "radial-gradient(#333, #22556E, lightblue)"
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
              width: "100%",
              display: "flex",
              justifyContent: "center",
              backgroundImage: "radial-gradient(#333, #22556E, lightblue)"
            }}
          >
            <img
              src="dog.jpg"
              alt="dog"
              style={{ borderRadius: "500px", width: "60%", margin: "auto" }}
            />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              backgroundImage: "radial-gradient(#333, #22556E, lightblue)"
            }}
          >
            <img
              src="dog5.gif"
              alt="dog"
              style={{ borderRadius: "500px", width: "60%", margin: "auto" }}
            />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              backgroundImage: "radial-gradient(#333, #22556E, lightblue)"
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
              width: "100%",
              display: "flex",
              justifyContent: "center",
              backgroundImage: "radial-gradient(#333, #22556E, lightblue)"
            }}
          >
            <img
              src="dog7.gif"
              alt="dog"
              style={{ borderRadius: "500px", width: "60%", margin: "auto" }}
            />
          </div>
        </Slider>
      </div>
    );
  }
}
