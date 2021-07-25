import React from "react";
import Slider from "react-slick";

import one from '../assets/images/art/murals/redleg2021/1.jpeg';
import two from '../assets/images/art/murals/redleg2021/2.jpeg';
import three from '../assets/images/art/murals/redleg2021/3.jpeg';
import four from '../assets/images/art/murals/redleg2021/4.jpeg';

export default function RedLegPictures() {
  var settings = {
    adaptiveHeight: true,
    className: "",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={one}/>
      </div>
      <div>
        <img src={two}/>
      </div>
      <div>
        <img src={three}/>
      </div>
      <div>
        <img src={four}/>
      </div>
    </Slider>
  );
}
