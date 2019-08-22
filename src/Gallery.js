import React from "react";
import TvCover from "./TvCover";
import getGallery from "./get-gallery";

export default function Gallery(props) {
  return (
    <div>
      <h1 className="WelcomeMsg">WELCOME TO JACKS' KODFLIX!</h1>
      <div className="wrapper">
        {getGallery().map(show => (
          <TvCover
            key={show.id}
            title={show.title}
            id={show.id}
            image={show.image}
          />
        ))}
      </div>
    </div>
  );
}
