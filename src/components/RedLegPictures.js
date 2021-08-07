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
    // className: "carosel",
    // dots: true,
    // dotsClass: 'row',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="">
          <img src={one} className='' alt="" />
        </div>
        <div className="">
          <img src={two} className='' alt="" />
        </div>
        {/* <div className="features image fit">
          <img src={three} alt="" />
        </div>
        <div className="features image fit">
          <img src={four} alt="" />
        </div> */}
      </Slider>
    </div>
  );
}
