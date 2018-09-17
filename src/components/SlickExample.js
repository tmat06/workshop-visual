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
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500
    };
    return (
      <div style={{ width: "100%" }}>
        <Slider
          {...settings}
          style={{ display: "flex", justifyContent: "center" }}
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <div id="NeededToChangeTheNodesToCenterEachSelected">
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                backgroundImage: "radial-gradient(#333, #22556E, lightblue)"
              }}
            >
              <img src="dog.jpg" alt="dog" style={{ borderRadius: "500px" }} />
            </div>
          </div>
          <div id="NeededToChangeTheNodesToCenterEachSelected">
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                backgroundImage: "radial-gradient(#333, #22556E, lightblue)"
              }}
            >
              <img src="dog.jpg" alt="dog" style={{ borderRadius: "500px" }} />
            </div>
          </div>
          <div id="NeededToChangeTheNodesToCenterEachSelected">
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                backgroundImage: "radial-gradient(#333, #22556E, lightblue)"
              }}
            >
              <img src="dog.jpg" alt="dog" style={{ borderRadius: "500px" }} />
            </div>
          </div>
          <div id="NeededToChangeTheNodesToCenterEachSelected">
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                backgroundImage: "radial-gradient(#333, #22556E, lightblue)"
              }}
            >
              <img src="dog.jpg" alt="dog" style={{ borderRadius: "500px" }} />
            </div>
          </div>
          <div id="NeededToChangeTheNodesToCenterEachSelected">
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                backgroundImage: "radial-gradient(#333, #22556E, lightblue)"
              }}
            >
              <img src="dog.jpg" alt="dog" style={{ borderRadius: "500px" }} />
            </div>
          </div>
          <div id="NeededToChangeTheNodesToCenterEachSelected">
            <div
              style={{
                width: "100%",
                height: "70vh",
                display: "flex",
                justifyContent: "center",
                backgroundImage: "radial-gradient(#333, #22556E, lightblue)"
              }}
            >
              <img
                src="dog.jpg"
                alt="dog"
                style={{ borderRadius: "500px", height: "" }}
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
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
