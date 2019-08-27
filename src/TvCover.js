import React from "react";
import { Link } from "react-router-dom";

export default function TvCover(props) {
  return (
    <div className="item">
      <Link to={props.id}>
        <img src={props.image} alt={`${props.title} logo`} />
      </Link>
      <div className="coverNames">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}
