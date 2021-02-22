import React from 'react';
import config from '../../config';

let year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { style, icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${style} ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">&copy; Artmmmporium {year}</p>
    </footer>
  );
}
