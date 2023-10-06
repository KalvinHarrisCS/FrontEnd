// src/App.js
import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer'; // Assume you have a Footer component
import './App.css';

const App = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [isBot, setIsBot] = useState(false);
  const headerRef = useRef();
  const footerRef = useRef();
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    setHeaderHeight(headerRef.current.offsetHeight);
    setFooterHeight(footerRef.current.offsetHeight);
  }, []);

  const handlePersonSelect = (person, isBot) => {
    setSelectedPerson(person);
    setIsBot(isBot);
  };

  return (
    <div className="app">
      <Header ref={headerRef} />
      <div className="content-wrapper" style={{ minHeight: `calc(100vh - ${headerHeight}px - ${footerHeight}px)` }}>
        <Sidebar onPersonSelect={handlePersonSelect} />
        <MainContent selectedPerson={selectedPerson} isBot={isBot} />
      </div>
      <div className="futuristic-section">
        <h1>Project Conscious - AI Call Agents</h1>
        {/* Add additional content here */}
      </div>
      <Footer ref={footerRef} /> {/* Footer component */}
    </div>
  );
};

export default App;
