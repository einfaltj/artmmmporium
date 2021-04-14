import React from 'react';
import bathroom from '../assets/images/art/bathroom.jpg'; 
import kidMural from '../assets/images/art/kidMural.jpg'; 
import redLeg from '../assets/images/art/RedLegMural.jpg'; 

export default function MuralProjects() {
  return (
    <section id="three" className="wrapper style4 special">
      <div className="inner">
        <header className="major">
          <h2>Mural Projects</h2>
        </header>
        <ul className="features image fit">
          <li>
            <h3>Red Leg</h3>
            <img src={redLeg} alt="" />
          </li>
          <li>
            <h3>Wine Vineyard</h3>
            <img src={bathroom} alt="" />
          </li>
          <li>
            <h3>Children's Murals</h3>
            <img src={kidMural} alt="" />
          </li>
        </ul>
      </div>
    </section>
  );
}
