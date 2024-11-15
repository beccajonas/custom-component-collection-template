import React, { useState } from 'react';
import { type FC } from 'react';
import { Retool } from '@tryretool/custom-component-support';

export const StringInput: FC = () => {
  const [name, _setName] = Retool.useStateString({
    name: 'name'
  });

  const [message, setMessage] = useState('Click the button to see something new!');

  const handleClick = () => {
    setMessage('You clicked the button!');
    console.log('Hello world!')
  };

  return (
    <div>
      <div>Hello {name}!</div>
      <button onClick={handleClick}>Click Me</button>
      <div>{message}</div>
    </div>
  );
};


export const ButtonClickEvent = () => {
  // Define the event callback to trigger an event in Retool
  const onClick = Retool.useEventCallback({ name: "click" });

  return (
    <div>
      <button 
        onClick={onClick} 
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
      Add an event handler to me!
      </button>
      <p style={{ fontStyle: 'italic' }}>You may have to refresh the page to see Event handler option</p>
    </div>
  );
};



export const DropdownComponentSettings: FC = () => {
  // Set the default height and width when the component is dragged onto the canvas
  Retool.useComponentSettings({
    defaultHeight: 50,
    defaultWidth: 5,
  });

  const [isOpen, setIsOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hoveredOption, setHoveredOption] = useState<string | null>(null); // Track hovered option

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const dropdownStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const listStyle: React.CSSProperties = {
    position: 'absolute',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '5px',
    margin: '0',
    padding: '0',
    listStyle: 'none',
    zIndex: 1,
    width: '100%',
  };

  const optionStyle: React.CSSProperties = {
    padding: '10px',
    cursor: 'pointer',
  };

  return (
    <div style={dropdownStyle}>
      <button style={buttonStyle} onClick={handleToggle}>
        {selectedOption || 'Select an option'}
      </button>
      {isOpen && (
        <ul style={listStyle}>
          {[
            'Option 1',
            'Option 2',
            'Option 3',
            'Option 4',
            'Option 5',
          ].map((option) => (
            <li
              key={option}
              style={{
                ...optionStyle,
                backgroundColor: hoveredOption === option ? 'pink' : 'transparent', // Hover effect
              }}
              onClick={() => handleSelect(option)}
              onMouseEnter={() => setHoveredOption(option)}
              onMouseLeave={() => setHoveredOption(null)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};





