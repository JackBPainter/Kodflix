import React, { useEffect, useState } from "react";
import TvCover from "./TvCover";
import getGallery from "./get-gallery";

export default function Gallery() {
  const [data, setData] = useState({id: '', title:'', image: ''})

  useEffect(() => {
    fetch('/rest/tvShows')
      .then(response => response.json())
      .then(data => setData(data))
  }, []);
  
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
