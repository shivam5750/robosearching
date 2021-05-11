import React from 'react';
import './Card.css';

const Card =({id, name, email}) =>{
    return(
        <div className= "bg-light-green dib  br3 pa3 ma2 grow shadow-s">
            <img alt='photos' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;