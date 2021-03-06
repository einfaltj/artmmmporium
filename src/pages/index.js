import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import MuralProjects from '../components/MuralProjects';

import artmmmporiumLogo from '../assets/images/banner_asdf.jpg';
import config from '../../config';
import Commissions from '../components/Commissions';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            {/* <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll> */}
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#three" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    {/* <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            Here?
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
            eleifend
            <br />
            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
            ullamcorper.
          </p>
        </header>
      </div>
    </section> */}

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={artmmmporiumLogo} alt="" />
        </div>
        <div className="content">
          <h2>About Me</h2>
          <p>
            COS based, available in the Front Range area for murals and
            commissions.
          </p>
        </div>
      </section>
    </section>
    <MuralProjects />
    <Commissions />

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Thanks for stopping in!</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Activate
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
