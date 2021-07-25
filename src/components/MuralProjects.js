import React from 'react';

import mural from '../assets/images/art/murals/mural.jpg';

export default function MuralProjects() {
  return (
    <section id="three" className="wrapper style4 special">
      <div className="inner">
        <header className="major">
          <h2>Mural Projects</h2>
          <p>
            Whether you are looking for something elaborate to completely
            transform your space or a decorative accent to highlight your
            personality, a mural is a fantastic way to :
          </p>
          <br></br>
          <ul>
            <li>Create a soothing harmonious environment</li>
            <li>Highlight your company’s values or brand</li>
            <li>Energize a boring workspace</li>
            <li>Bring imagination and fun to children’s rooms</li>
            <li>Create maximum impact in a gripping affordable way</li>
          </ul>
        </header>
        <div className="col-4 col-12-medium"></div>
        <ul className="features image fit">
          {/* <li>
            <h3>Red Leg</h3>
            <img src={redleg} alt="" />
          </li>
          <li>
            <h3>Red Leg</h3>
            <h5>(On Forge Road)</h5>
            <img src={redLeg_old} alt="" />
          </li> */}
          <li>
            {/* <h3>Wine Vineyard</h3> */}
            <img src={mural} alt="" />
          </li>
        </ul>

        <div className="inner">
          <ul className="actions stacked">
            <li>
              <a href="/MuralProcess" className="button fit">
                Wanna learn how it's done?
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
