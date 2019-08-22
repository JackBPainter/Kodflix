import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getGallery from "./get-gallery";

export default function Details(props) {
  const [detailsText, setDetailsText] = useState();
  const tvShowId = props.match.params.tvShowUrl;

  useEffect(() => {
    let tvShow = getGallery().find(gallery => gallery.id === tvShowId);
    setDetailsText(tvShow.title);
  }, [tvShowId]);

  return (
    <div>
      <h1>{detailsText}</h1>
      <Link to="/">Return to the Home page</Link>
    </div>
  );
}