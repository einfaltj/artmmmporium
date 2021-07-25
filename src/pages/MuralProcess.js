import React from 'react';

import logo from '../assets/images/banner_logo.jpg';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

import banner from '../assets/images/banner.jpg';
import redleg2014 from '../assets/images/art/murals/redleg2014.jpeg';
import winery from '../assets/images/art/murals/winery.jpeg';
import children from '../assets/images/art/murals/childrens.jpeg';

const IndexPage = () => (
  <Layout>
    <article id="main">
      <header>
        <h2>Murals</h2>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <section>
            <span className="image left">
              <img src={logo} alt="" />
            </span>
            <h2>Murals By Madeleine</h2>
            <p>
              How we think about murals is changing; we aren’t boxed in by the
              floral scenery we used to associate with murals. Murals can be
              decorative: a faux marble wall in a kitchen elevates the space, a
              watercolor technique creates a youthful accent. As a self-taught
              artist, with 15 years experience as a muralist, I'm able to give
              you the look you need to enchant your space.
            </p>
            <h2>Why choose me as your muralist?</h2>
            <p>
              One of my strengths is my ability to work with my clients to bring
              their unique visions to life. I’m great at reading between the
              lines; capturing more than my clients hoped for. I do my homework
              and present you with a small scale painting of what the mural will
              look like, free of charge. I’m able to work backwards also; to
              work within a set budget to give my clients a wonderful product.
              If you have a project that’s been in your mind, contact me and
              let’s get the ball rolling on bringing your unique vision to life!
            </p>
            <h2>Pricing</h2>
            <p>
              I charge by the sqaure foot and the amount of detail, ranging from
              $10 to $15 a square foot.
            </p>
          </section>

          <section></section>

          <section>
            <h3>Red Leg Mural 2021</h3>
            <div className="box alt">
              <div className="row gtr-50 gtr-uniform">
                <div className="col-12">
                  <span className="image fit">
                    <iframe
                      width="100%"
                      height="400"
                      src="https://www.youtube-nocookie.com/embed/fGBbTnkljz8"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </span>
                </div>
              </div>
            </div>
            <ul className="features image fit">
              <li>
                <h3>Red Leg Mural 2014</h3>
                <img src={redleg2014} alt="" />
              </li>
            </ul>
          </section>
          <section className="wrapper style4 special">
            <div className="inner">
              <header className="major">
                <h2>Residential Murals</h2>
              </header>
              <ul className="features image fit">
                <li>
                  <h3>Winery Project</h3>
                  <img src={winery} alt="" />
                </li>
                <li>
                  <h3>Children's Playroom Mural</h3>
                  <img src={children} alt="" />
                </li>
                {/* <li>
            <h3>Stained Glass</h3>
            <img src={pic3} alt="" />
          </li> */}
              </ul>
            </div>
          </section>
        </div>
      </section>
      <ContactForm />
    </article>
  </Layout>
);

export default IndexPage;
