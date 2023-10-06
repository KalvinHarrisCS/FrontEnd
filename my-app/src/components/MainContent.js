import React, { useState, useEffect } from 'react';

const MainContent = ({ selectedPerson, isBot }) => {
  const [data, setData] = useState({});
  
  const handleTextChange = (event) => {
    setData({
      ...data,
      [selectedPerson.name]: {
        ...data[selectedPerson.name],
        text: event.target.value,
      },
    });
  };

  const handleToneChange = (event) => {
    setData({
      ...data,
      [selectedPerson.name]: {
        ...data[selectedPerson.name],
        tone: event.target.value,
      },
    });
  };
  
  useEffect(() => {
    if (selectedPerson && !data[selectedPerson.name]) {
      setData({
        ...data,
        [selectedPerson.name]: { text: '', tone: '' },
      });
    }
  }, [selectedPerson, data]);

  return (
    <main className={`main-content ${isBot ? 'bot-selected' : ''}`}>
      <div className="chat-section">
        {selectedPerson ? (
          <>
            <h2>{selectedPerson.name} {isBot && '(Bot)'}</h2>
            <div className="tone-selector">
              <label htmlFor="tone">Tone: </label>
              <select 
                id="tone" 
                value={data[selectedPerson.name]?.tone || ''} 
                onChange={handleToneChange}
              >
                <option value="" disabled>Select a tone</option>
                <option value="happy">Happy</option>
                <option value="sad">Sad</option>
                <option value="angry">Angry</option>
              </select>
            </div>
            <textarea 
              className="content-textarea" 
              value={data[selectedPerson.name]?.text || ''} 
              onChange={handleTextChange} 
              placeholder="Enter your text here..."
            />
          </>
        ) : (
          <p>Please select a person or bot from the sidebar.</p>
        )}
      </div>
      <div className="actions-panel">
        <p>Performed actions</p>
      </div>
    </main>
  );
};

export default MainContent;
