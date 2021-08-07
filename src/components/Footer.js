import React from 'react';
import ContactIcons from './ContactIcons';

let year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer id="footer">
      <ContactIcons/>
      <p className="copyright">&copy; Artmmmporium {year}</p>
    </footer>
  );
}
