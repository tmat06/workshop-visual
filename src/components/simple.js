import React from "react";
import Slider from "react-slick";

export default class SlickExample extends React.Component {
  render() {
    return (
      <Slider
        {...{
          fade: true,
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        }}
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
      </Slider>
    );
  }
}

//   <Parallax
//     blur={1}
//     bgImage="/dog.jpg"
//     bgImageAlt="dog looking out a window"
//     strength={500}
//     style={{
//       height: "100vh",
//       width: "100%"
//     }}
//   >
//     {/* Text can go here */}
//   </Parallax>

//   <div>
//     <button className="btn btn-lg">OK</button>

//     <input
//       type="text"
//       className="form-control"
//       aria-label="Sizing example input"
//       aria-describedby="inputGroup-sizing-default"
//       placeholder="Username"
//     />
//   </div>
