import React, { useState } from 'react';

const Sidebar = ({ onPersonSelect }) => {
    const [people, setPeople] = useState([
    { name: 'Mila Turner', isBot: false, isActive: false },
    { name: 'Ezra Davis', isBot: true, isActive: false },
    { name: 'Oscar Lewis', isBot: false, isActive: false },
    { name: 'Harper Clark', isBot: true, isActive: false },
    { name: 'Nora Adams', isBot: false, isActive: false },
    { name: 'Eli Young', isBot: true, isActive: false },
    { name: 'Lila Hall', isBot: false, isActive: false },
    { name: 'Mateo Nelson', isBot: true, isActive: false },
    { name: 'Oliver Scott', isBot: false, isActive: false },
    { name: 'Aria Mitchell', isBot: true, isActive: false },
    { name: 'Leo Roberts', isBot: false, isActive: false },
    { name: 'Sophia Carter', isBot: true, isActive: false },
    { name: 'Mason Johnson', isBot: false, isActive: false },
    { name: 'Ava Taylor', isBot: true, isActive: false },
    { name: 'Benjamin Anderson', isBot: false, isActive: false },
    { name: 'Amelia Thomas', isBot: true, isActive: false },
    { name: 'Lucas Jackson', isBot: false, isActive: false },
    { name: 'Mia White', isBot: true, isActive: false },
    { name: 'Ethan Harris', isBot: false, isActive: false },
    { name: 'Isabella Martin', isBot: true, isActive: false },
    { name: 'Alexander Thompson', isBot: false, isActive: false },
    { name: 'Emma Garcia', isBot: true, isActive: false },
    { name: 'Sebastian Martinez', isBot: false, isActive: false },
    { name: 'Olivia Lee', isBot: true, isActive: false },
    { name: 'Jack Wilson', isBot: false, isActive: false },
    { name: 'Charlotte Moore', isBot: true, isActive: false },
    { name: 'Henry Taylor', isBot: false, isActive: false },
    { name: 'Lily Johnson', isBot: true, isActive: false },
    { name: 'Wyatt Brown', isBot: false, isActive: false },
    { name: 'Chloe Davis', isBot: true, isActive: false }
  ]);

  const handlePersonClick = (selectedPerson) => {
    const updatedPeople = people.map((person) => ({
      ...person,
      isActive: person.name === selectedPerson.name
    }));
    setPeople(updatedPeople);
    onPersonSelect(selectedPerson);
  };

  const renderPerson = (person, index) => (
    <div key={index} className={`person ${person.isBot ? 'bot' : ''}`}>
      {person.name}
      <button onClick={() => handlePersonClick(person)}>
        {person.isActive ? 'Active' : 'Inactive'}
      </button>
    </div>
  );
  

  return (
    <div className="sidebar">
      <h2>People</h2>
      {people.filter(p => !p.isBot).map(renderPerson)}
      <h2>Bots</h2>
      {people.filter(p => p.isBot).map(renderPerson)}
    </div>
  );
};

export default Sidebar;