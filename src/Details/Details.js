import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import getGallery from "../get-gallery";
import "./Details.css";

export default function Details(props) {
  const [tvShowValue, setTvShow] = useState("");
  const tvShowId = props.match.params.tvShowUrl;

  useEffect(() => {
    let tvShow = getGallery().find(gallery => gallery.id === tvShowId);
    setTvShow(tvShow);
  }, [tvShowId]);

  if (tvShowValue === undefined) {
    return <Redirect to="/NotFound" />;
  } else {
    return (
      <div className="details">
        <h1 className="details.header">{tvShowValue.title}</h1>
        <div className="details-container">
          <p className="text">{tvShowValue.synopsis}</p>
          <img className="image"src={tvShowValue.image} alt={`${tvShowValue.title} logo`} />
        </div>
        <Link to="/">Return to Home Page</Link>
      </div>
    );
  }
}
