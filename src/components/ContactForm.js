import { navigate } from 'gatsby';
import React from 'react';
// import ReCAPTCHA from 'react-google-recaptcha';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default function ContactForm() {
  const [state, setState] = React.useState({});

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  // const sitekey = process.env.GATSBY_SITE_RECAPTCHA_KEY;

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        // 'g-recaptcha': sitekey,
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  return (
    <section id="cta" className="wrapper style4 special">
      <form
        name="contact"
        method="POST"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        // data-netlify-recaptcha="true"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <div className="row gtr-uniform">
          <div className="col-6 col-12-xsmall">
            <input
              type="text"
              name="name"
              id="name"
              defaultValue=""
              placeholder="Name"
              onChange={handleChange}
            />
          </div>
          <div className="col-6 col-12-xsmall">
            <input
              type="email"
              name="email"
              id="email"
              defaultValue=""
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="col-6 col-12-xsmall">
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              onChange={handleChange}
            />
          </div>
          <div className="col-12">
            <textarea
              name="message"
              id="message"
              placeholder="I want a mural that..."
              rows="6"
              onChange={handleChange}
            ></textarea>
          </div>
          {/* <div className="col-12">
            <select name="subject" id="subject">
              <option value="">- Subject -</option>
              <option value="1">Manufacturing</option>
              <option value="1">Shipping</option>
              <option value="1">Administration</option>
              <option value="1">Human Resources</option>
            </select>
          </div> */}
          {/* <label>
          <ReCAPTCHA
            name="g-recaptcha-response"
            // ref={captchaRef}
            sitekey={sitekey}
            theme="dark"
            onChange={val => {
              setState({ ...state, 'g-recaptcha-response': val });
            }}
          />
        </label> */}
          <p>
            <button type="submit">Send</button>
          </p>
        </div>
      </form>
    </section>
  );
}

// name, email, subject line, subject?
