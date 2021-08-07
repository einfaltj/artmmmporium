import React from 'react';
import Slider from 'react-slick';

import one from '../assets/images/art/murals/redleg2021/1.jpeg';
import two from '../assets/images/art/murals/redleg2021/2.jpeg';
import three from '../assets/images/art/murals/redleg2021/3.jpeg';
import four from '../assets/images/art/murals/redleg2021/4.jpeg';

import "../assets/sass/slick.css"; 
// import "../assets/sass/slick-theme.css"; 

export default function RedLegPictures() {
  var settings = {
    accessibility: true,
    adaptiveHeight: false,
    arrows: true,
    // dots: true,
    // dotsClass: 'row',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <link rel="stylesheet" type="text/css" href="static/slick/slick.css" />
      <link
        rel="stylesheet"
        type="text/css"
        href="static/slick/slick-theme.css"
      />
      <Slider {...settings}>
        <div className="features image fit">
          <img src={one} alt="" />
        </div>
        <div className="features image fit">
          <img src={two} alt="" />
        </div>
        <div className="features image fit">
          <img src={three} alt="" />
        </div>
        <div className="features image fit">
          <img src={four} alt="" />
        </div>
      </Slider>
    </div>
  );
}
