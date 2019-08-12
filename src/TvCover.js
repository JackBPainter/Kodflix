import React from 'react';

export default function TvCover(props) {
    return (
        <div className='item'>
        <img src={props.image} alt={`${props.tvshow} logo`}/>
        <div className='coverNames'>
            <h1>{props.tvshow}</h1>
        </div>
        </div>
    );
}

 