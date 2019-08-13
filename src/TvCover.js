import React from "react";
import {Link} from "react-router-dom";

export default function TvCover(props) {
    return (
        <div className='item'>
        <Link to="/Details"><img src={props.image} alt={`${props.tvshow} logo`}/></Link>
        <div className='coverNames'>
            <h1>{props.tvshow}</h1>
        </div>
        </div>
    );
}

 