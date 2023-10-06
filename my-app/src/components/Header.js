import React, { useState, forwardRef } from 'react';

const Header = forwardRef((props, ref) => {
  const [language, setLanguage] = useState('English');

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'English' ? 'Spanish' : 'English'));
  };

  return (
    <header className="header" ref={ref}>
      <div className="header-center">Project Conscious - AI Call Agents</div>
      <div className="header-right">
        <button onClick={toggleLanguage}>{language}</button>
      </div>
    </header>
  );
});

export default Header;
