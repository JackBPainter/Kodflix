import React from 'react';
import TheShiningCover from './images/The Shining Movie Cover.jpg';
import BlackMirrorCover from './images/Black Mirror Cover.jpg';
import GameofThrones from './images/Game of Thrones Cover.jpg';
import HannibalCover from './images/Hannibal Cover.jpg';
import LastChanceUCover from './images/Last Chance U Cover.jpg';
import PeakyBlindersCover from './images/Peaky Blinders Cover.jpg';
import LouisWeirdWeekendsCover from './images/Louis Weird Weekends Cover.jpg';
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
          <div className='item'>
          <img src={BlackMirrorCover} alt="Black Mirror" />
          </div>
          <div className='item'>
          <img src={GameofThrones} alt="Game of Thrones"/>
          </div>
          <div className='item'>
          <img src={HannibalCover} alt="Hannibal"/>
          </div>
        </div>
        <div className='wrapper'>  
          <div className='item'>
          <img src={LastChanceUCover} alt="Last Chance U"/>
          </div>
          <div className='item'>
          <img src={PeakyBlindersCover} alt="Peaky Blinders"/>
          </div>
          <div className='item'>
          <img src={LouisWeirdWeekendsCover} alt="Louis Theroux Weird Weekends"/>
          </div>
        </div>
    </div>
  );
}

export default App;
