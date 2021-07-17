import React from 'react';

export default function MuralProjects() {
  return (
    <section id="cta" className="wrapper style4 special">
      <form name="contact" method="POST" data-netlify="true">
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
            Subject Line: <input type="email" name="subject" />
          </label>
        </p>
        <p>
          <label>
            Subject: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </section>
  );
}

// name, email, subject line, subject?
