import React from 'react';
import pic3 from '../assets/images/pic03.jpg';

export default function Commissions() {
  return (
    <section id="three" className="wrapper style4 special">
      <div className="inner">
        <header className="major">
          <h2>Commissions:</h2>
          <p>
          Do you have an idea for a painting you’d like to see hang in your home? 
          Or perhaps you have an old favorite photo you’d like painted to give as a gift to a loved one? 
          I am always energized working with my clients to create meaningful commissions. 
          I paint in watercolors, acrylics and oils. 
          I am happy to work with clients who are long-distance and ship projects directly to them. 
          You’d be surprised how affordable a personal piece of art can be…. 
          Contact me for pricing information!
          (Quote from a past client)
          </p>
        </header>
        <ul className="features image fit">
          <li>
            <h3>Watercolors</h3>
            <img src={pic3} alt="" />
          </li>
          <li>
            <h3>Acrylic</h3>
            <img src={pic3} alt="" />
          </li>
          <li>
            <h3>Oils</h3>
            <img src={pic3} alt="" />
          </li>
          {/* <li>
            <h3>Stained Glass</h3>
            <img src={pic3} alt="" />
          </li> */}
        </ul>
      </div>
    </section>
  );
}
