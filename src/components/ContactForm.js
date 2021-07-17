import React from 'react';

export default function MuralProjects() {
  return (
    <section id="cta" className="wrapper style4 special">
      <form name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true">
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Subject Line: <input type="text" name="subject" />
          </label>
        </p>
        <p>
          <label>
            Subject: <textarea name="message"></textarea>
          </label>
        </p>
        <div data-netlify-recaptcha="true"/>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </section>
  );
}

// name, email, subject line, subject?
