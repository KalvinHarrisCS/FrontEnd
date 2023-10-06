// src/components/Footer.js
import React, { forwardRef } from 'react';

const Footer = forwardRef((props, ref) => {
    return (
      <footer ref={ref} className="footer">
      {/* Your footer content here */}
    </footer>
  );
});

export default Footer;
