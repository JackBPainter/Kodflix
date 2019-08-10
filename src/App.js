import React from 'react';
import BlackMirrorCover from './images/Black Mirror Cover.jpg';
import GameofThrones from './images/Game of Thrones Cover.jpg';
import HannibalCover from './images/Hannibal Cover.jpg';
import LastChanceUCover from './images/Last Chance U Cover.jpg';
import PeakyBlindersCover from './images/Peaky Blinders Cover.jpg';
import LouisWeirdWeekendsCover from './images/Louis Weird Weekends Cover.jpg';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h1>Welcome to Jacks Kodlfix!</h1>
        </p>
        </header>
        <br /><br />
        <div className='wrapper'>  
          <div className='item'>
          <img src={BlackMirrorCover} alt="Black Mirror" />
          <div className='coverNames'>
            <h1> Black Mirror </h1>
          </div>
          </div>
          <div className='item'>
          <img src={GameofThrones} alt="Game of Thrones"/>
          <div className='coverNames'>
            <h1> Game of Thrones </h1>
          </div>
          </div>
          <div className='item'>
          <img src={HannibalCover} alt="Hannibal"/>
          <div className='coverNames'>
            <h1> Hannibal </h1>
          </div>
          </div>
        </div>
        <div className='wrapper'>  
          <div className='item'>
          <img src={LastChanceUCover} alt="Last Chance U"/>
          <div className='coverNames'>
            <h1> Last Chance U </h1>
          </div>
          </div>
          <div className='item'>
          <img src={PeakyBlindersCover} alt="Peaky Blinders"/>
          <div className='coverNames'>
            <h1> Peaky Blinders </h1>
          </div>
          </div>
          <div className='item'>
          <img src={LouisWeirdWeekendsCover} alt="Louis Theroux Weird Weekends"/>
          <div className='coverNames'>
            <h1> Louis' Weird Weekends </h1>
          </div>
          </div>
        </div>
    </div>
  );
}