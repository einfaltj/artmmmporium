import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import MuralProjects from '../components/MuralProjects';
import ContactForm from '../components/ContactForm';

import aboutMe from '../assets/images/About_me.jpg';
import Commissions from '../components/Commissions';

const IndexPage = () => (
  <Layout>
      {/* <link rel="stylesheet" type="text/css" href="static/slick/slick.css" />
      <link
        rel="stylesheet"
        type="text/css"
        href="static/slick/slick-theme.css"
      /> */}
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
      <Scroll type="id" element="two">
        <a href="#two" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

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
      </div>
    </section>
    <ContactForm />
  </Layout>
);

export default IndexPage;
