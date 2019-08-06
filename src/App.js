import React from 'react';
import TheShiningCover from './images/The Shining Movie Cover.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={TheShiningCover} alt="The Shining Movie"/>
        <p>
          <h1>Welcome to Jacks Kodlfix!</h1>
        </p>
        </header>
        <br /><br />
        <div className='wrapper'>  
          <div className='item'>Black Mirror</div>
          <div className='item'>F1 Drive to Survive</div>
          <div className='item'>Hannibal</div>
        </div>
        <div className='wrapper'>  
          <div className='item'>Last Chance U</div>
          <div className='item'>Louis' Weird Weekends</div>
          <div className='item'>Peaky Blinders</div>
        </div>
    </div>
  );
}

export default App;
