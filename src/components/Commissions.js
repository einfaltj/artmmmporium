import React from 'react';
import mack from '../assets/images/art/portraits/mack.jpeg';
import river from '../assets/images/art/landscapes/river_rocks.jpeg';
import staver from '../assets/images/art/special_project/staver.jpeg';

export default function Commissions() {
  return (
    <section id="three" className="wrapper style4 special">
      <div className="inner">
        <header className="major">
          <h2>Commissions and Fine art:</h2>
          <p>
            Do you have an idea for a painting you’d like to see hang in your
            home? Or perhaps you have an old favorite photo you’d like painted
            to give as a gift to a loved one? I am always energized working with
            my clients to create meaningful commissions. I paint in watercolors,
            acrylics and oils. I am happy to work with clients who are
            long-distance and ship projects directly to them. You’d be surprised
            how affordable a personal piece of art can be…. Contact me for
            pricing information!
          </p>
        </header>
        <ul className="features image fit">
          <li>
            <h3>Landscapes</h3>
            <img src={river} alt="" />
          </li>
          <li>
            <h3>Portraits</h3>
            <img src={mack} alt="" />
          </li>
          <li>
            <h3>Special Projects</h3>
            <img src={staver} alt="" />
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
