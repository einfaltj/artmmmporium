import { navigate } from 'gatsby';
import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

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
        <p>
          <label>
            Your Name: <input type="text" name="name" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Your Email:{' '}
            <input type="email" name="email" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Subject Line:{' '}
            <input type="text" name="subject" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Subject:{' '}
            <textarea name="message" onChange={handleChange}></textarea>
          </label>
        </p>
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
      </form>
    </section>
  );
}

// name, email, subject line, subject?
