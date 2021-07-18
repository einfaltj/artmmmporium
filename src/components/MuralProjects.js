import React from 'react';

import wine from '../assets/images/art/murals/wine_vinyard.jpeg';
import mural from '../assets/images/art/murals/mural.jpg';
import kidMural from '../assets/images/art/kidMural.jpg';
import redLeg_old from '../assets/images/art/RedLegMural.jpg';
import redleg from '../assets/images/art/murals/redleg.jpg';

export default function MuralProjects() {
  return (
    <section id="three" className="wrapper style4 special">
      <div className="inner">
        <header className="major">
          <h2>Mural Projects</h2>
          <p>
            How we think about murals is changing; we aren’t boxed in by the
            floral scenery we used to associate with murals. Murals can be
            decorative: a faux marble wall in a kitchen elevates the space, a
            watercolor technique creates a youthful accent. Whether you are
            looking for something elaborate to completely transform your space
            or a decorative accent to highlight your personality, a mural is a
            fantastic way to :
          </p>
          <br></br>
          <p>
            Create a soothing harmonious environment
          <br></br>
            Highlight your company’s values or brand 
          <br></br>
            Energize a boring workspace 
          <br></br>
            Bring imagination and fun to children’s rooms
          <br></br>
            Create maximum impact in a gripping affordable way
          </p>
          {/* <h2>Why choose me as your muralist?</h2>
          <p>
            One of my strengths is my ability to work with my clients to bring
            their unique visions to life. I’m great at reading between the
            lines; capturing more than my clients hoped for. I do my homework
            and present you with a small scale painting of what the mural will
            look like, free of charge. I’m able to work backwards also; to work
            within a set budget to give my clients a wonderful product. If you
            have a project that’s been in your mind, contact me and let’s get
            the ball rolling on bringing your unique vision to life!
          </p>
          <p>(quote from mural client, perhaps Todd)</p> */}
        </header>
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
              <a href="/#" className="button fit">
                Wanna learn how it's done?
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
