import React from 'react';
import TvCover from './TvCover';
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
          <TvCover tvshow='Black Mirror' image = {BlackMirrorCover}/>
          <TvCover tvshow='Game of Thrones' image = {GameofThrones}/>
          <TvCover tvshow='Hannibal' image = {HannibalCover}/>

        <div className='wrapper'>  
          <TvCover tvshow='Last Chance U' image = {LastChanceUCover}/>
          <TvCover tvshow='Peaky Blinders' image = {PeakyBlindersCover}/>
          <TvCover tvshow='Louis Weird Weekends' image = {LouisWeirdWeekendsCover}/>
          </div>
          </div>
        </div>
  );
}