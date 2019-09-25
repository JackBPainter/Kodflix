import React, { useEffect, useState } from "react";
import TvCover from "./TvCover";

export default function Gallery() {
  const [data, setData] = useState(0);

  useEffect(() => {
    fetch("/rest/tvShows")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  if (data) {
    return (
      <div className="Gallery">
        <div className="Gallery-Header">
        <h1 className="WelcomeMsg">Welcome to kodflix!</h1>
        </div>
        <div className="wrapper">
          {data.map(show => (
            <TvCover key={show.id} title={show.title} id={show.id} />
          ))}
        </div>
      </div>
    );
  }
  return <div></div>;
}
