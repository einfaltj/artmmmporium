import React from 'react';
import Slider from 'react-slick';

import one from '../assets/images/art/murals/redleg2021/1.jpeg';
import two from '../assets/images/art/murals/redleg2021/2.jpeg';
import three from '../assets/images/art/murals/redleg2021/3.jpeg';
import four from '../assets/images/art/murals/redleg2021/4.jpeg';
import five from '../assets/images/art/murals/redleg2021/5.jpeg';
import six from '../assets/images/art/murals/redleg2021/6.jpeg';
import seven from '../assets/images/art/murals/redleg2021/7.jpeg';
import eight from '../assets/images/art/murals/redleg2021/8.jpeg';
import nine from '../assets/images/art/murals/redleg2021/9.jpeg';
import ten from '../assets/images/art/murals/redleg2021/10.jpeg';
import eleven from '../assets/images/art/murals/redleg2021/11.jpeg';
import twelve from '../assets/images/art/murals/redleg2021/12.jpeg';

import "../assets/sass/slick.css"; 
import "../assets/sass/slick-theme.css"; 

export default function RedLegPictures() {
  var settings = {
    accessibility: true,
    adaptiveHeight: true,
    adaptiveWidth: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {/* TODO: make this a global component that can import a file of images */}
        <div className="">
          <img src={one} alt="" />
        </div>
        <div className="">
          <img src={two} alt="" />
        </div>
        <div className="">
          <img src={three} alt="" />
        </div>
        <div className="">
          <img src={four} alt="" />
        </div>
        <div className="">
          <img src={five} alt="" />
        </div>
        <div className="">
          <img src={six} alt="" />
        </div>
        <div className="">
          <img src={seven} alt="" />
        </div>
        <div className="">
          <img src={eight} alt="" />
        </div>
        <div className="">
          <img src={nine} alt="" />
        </div>
        <div className="">
          <img src={ten} alt="" />
        </div>
        <div className="">
          <img src={eleven} alt="" />
        </div>
        <div className="">
          <img src={twelve} alt="" />
        </div>
      </Slider>
    </div>
  );
}
