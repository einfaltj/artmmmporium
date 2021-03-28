import React from 'react';
import pic3 from '../assets/images/pic03.jpg';

export default function Commissions() {
  return (
    <section id="three" className="wrapper style4 special">
      <div className="inner">
        <header className="major">
          <h2>Commissions</h2>
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
          <li>
            <h3>Stained Glass</h3>
            <img src={pic3} alt="" />
          </li>
        </ul>
      </div>
    </section>
  );
}
