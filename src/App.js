import React from 'react';
import TheShiningCover from './The Shining Movie Cover.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={TheShiningCover} alt="Shining Movie Cover" />
        <p>
          <h1>Welcome to Jacks Kodlfix!</h1>
        </p>
      </header>
    </div>
  );
}

export default App;
