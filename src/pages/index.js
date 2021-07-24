import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import MuralProjects from '../components/MuralProjects';
import ContactForm from '../components/ContactForm';
import ContactForm2 from '../components/ContactForm2';

import artmmmporiumLogo from '../assets/images/banner_asdf.jpg';
import aboutMe from '../assets/images/About_me.jpg';
import config from '../../config';
import Commissions from '../components/Commissions';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{'Madeleine Einfalt'}</h2>
        <p>{'Bringing your artistic vision to life'}</p>
        {/* <div className="image">
          <img src={artmmmporiumLogo} alt="" />
        </div> */}
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
          <img src={aboutMe} alt="" />
        </div>
        <div className="content">
          <h2>About the artist:</h2>
          <p>
            Madeleine is a self-taught artist residing in Colorado Springs, CO.
            She is married to Jesse, brilliant IT professional, and they have
            two young children. When not with her energetic children, Madeleine
            enjoys reading, gardening and, of course, art! She is available for
            commissions and mural work along the Front Range area.
          </p>
        </div>
      </section>
    </section>
    <MuralProjects />
    <Commissions />

    <section id="cta" className="wrapper style4 special">
      <div className="inner">
        <header>
          <h2>Thanks for stopping in!</h2>
          <p>Have any questions? Fill out the form below!</p>
        </header>
        {/* <ul className="actions stacked">
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
        </ul> */}
      </div>
    </section>
    <ContactForm />
    {/* <ContactForm2 /> */}
  </Layout>
);

export default IndexPage;
