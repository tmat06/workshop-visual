import React from "react";
import Slider from "react-slick";

<style>
  @import "~slick-carousel/slick/slick.css"; @import
  "~slick-carousel/slick/slick-theme.css";
</style>;

export default class SlickExample extends React.Component {
  render() {
    return (
      <Slider
        {...{
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
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
      </Slider>
    );
  }
}
