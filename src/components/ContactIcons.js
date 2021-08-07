import React from 'react';
import config from '../../config';

const ContactIcons = () => (
  <div>
    <ul className="icons">
      {config.socialLinks.map(social => {
        const { style, icon, name, url } = social;
        return (
          <li key={url}>
            <a
              href={url}
              className={`icon ${style} ${icon}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="label">{name}</span>
            </a>
          </li>
        );
      })}
    </ul>
  </div>
);

export default ContactIcons;
