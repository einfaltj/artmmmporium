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
  // return (
  //   <div>
  //     <h2> Responsive </h2>
  //     <Slider {...settings}>
  //       <div>
  //         <h3>1</h3>
  //       </div>
  //       <div>
  //         <h3>2</h3>
  //       </div>
  //       <div>
  //         <h3>3</h3>
  //       </div>
  //       <div>
  //         <h3>4</h3>
  //       </div>
  //       <div>
  //         <h3>5</h3>
  //       </div>
  //       <div>
  //         <h3>6</h3>
  //       </div>
  //       <div>
  //         <h3>7</h3>
  //       </div>
  //       <div>
  //         <h3>8</h3>
  //       </div>
  //     </Slider>
  //   </div>
  // );
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
