import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
//import TvShows from "../tvShows";
import "./Details.css";

export default function Details(props) {
  const [show, setShow] = useState("");
  const tvShowId = props.match.params.tvShowUrl;

  useEffect(() => {
    fetch("/rest/tvShows")
      .then(response => response.json())
      .then(show => setShow(show.find(gallery => gallery.id === tvShowId)))
  }, [tvShowId]);

  if (show === undefined) {
    return <Redirect to="/NotFound" />;
  } else if (show.id) {
    return (
      <div className="details">
        <h1 className="details.header">{show.title}</h1>
        <div className="details-container">
          <p className="text">{show.synopsis}</p>
          <img className="image"src={require(`../images/${show.id}.jpg`)} alt={`${show.title} logo`} />
        </div>
        <Link className="Home-Page-Link" to="/">Return to Home Page</Link>
      </div>
    );
  }
  return <div></div>
}