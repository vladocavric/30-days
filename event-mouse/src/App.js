import React, { useState } from 'react';
import './App.css';

function App() {
  const [position, setPosition] = useState({top: '0', left: '0'});


  const handleMove = (e) => {
    const elementWidth = document.querySelector('h1').clientWidth
    const elementHeight = document.querySelector('h1').clientHeight
    const positionX = e.clientX + elementWidth > window.innerWidth ? window.innerWidth - elementWidth : e.clientX
    const positionY = e.clientY + elementHeight > window.innerHeight ? window.innerHeight - elementHeight : e.clientY
    setPosition({top: `${positionY}px`, left: `${positionX}px`})
  }
  return (
    <div className="App" onClick={handleMove}>
      <h1 style={position}>30 days Of React</h1>
    </div>
  );
}

export default App;
