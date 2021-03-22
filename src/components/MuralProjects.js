import React from 'react';
import pic3 from '../assets/images/pic03.jpg';

export default function MuralProjects() {
  return (
    <section id="three" className="wrapper style4 special">
      <div className="inner">
        <header className="major">
          <h2>Mural Projects</h2>
        </header>
        <ul className="features">
          <li>
            <h3>Red Leg</h3>
            <img src={pic3} alt="" />
          </li>
          <li>
            <h3>Wine Vineyard</h3>
            <img src={pic3} alt="" />
          </li>
          <li>
            <h3>Children's Murals</h3>
            <img src={pic3} alt="" />
          </li>
        </ul>
      </div>
    </section>
  );
}
