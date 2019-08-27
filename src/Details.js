import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import getGallery from "./get-gallery";

export default function Details(props) {
  const [tvShowValue, setTvShow] = useState('');
  const tvShowId = props.match.params.tvShowUrl;

  useEffect(() => {
    let tvShow = getGallery().find(gallery => gallery.id === tvShowId);
    setTvShow(tvShow);
  }, [tvShowId]);

  if (tvShowValue === undefined) {
    return <Redirect to="/NotFound" />;
  } else {
     return (
      <div>
        <h1>{tvShowValue.title}</h1>
        <Link to="/">Return to Home Page</Link>
      </div>
    );
  }
}
