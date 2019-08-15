import React from "react";
import TvCover from "./TvCover";
import BlackMirrorCover from "./images/Black Mirror Cover.jpg";
import GameofThrones from "./images/Game of Thrones Cover.jpg";
import HannibalCover from "./images/Hannibal Cover.jpg";
import LastChanceUCover from "./images/Last Chance U Cover.jpg";
import PeakyBlindersCover from "./images/Peaky Blinders Cover.jpg";
import LouisWeirdWeekendsCover from "./images/Louis Weird Weekends Cover.jpg";

export default function Gallery(props) {
  return (
    <div>
      <h1 className="WelcomeMsg">Welcome to Jacks Kodflix!</h1>
      <div className="wrapper">
        <TvCover
          tvshow="Black Mirror"
          id="black-mirror"
          image={BlackMirrorCover}
        />
        <TvCover
          tvshow="Game of Thrones"
          id="game-of-thrones"
          image={GameofThrones}
        />
        <TvCover tvshow="Hannibal" id="hannibal" image={HannibalCover} />
        <TvCover
          tvshow="Last Chance U"
          id="last-chance-u"
          image={LastChanceUCover}
        />
        <TvCover
          tvshow="Peaky Blinders"
          id="peaky-blinders"
          image={PeakyBlindersCover}
        />
        <TvCover
          tvshow="Louis Weird Weekends"
          id="louis-weird-weekends"
          image={LouisWeirdWeekendsCover}
        />
      </div>
    </div>
  );
}
