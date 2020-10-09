// Write your Character component here
import React from 'react';

const Character = (props) =>{
    console.log(props)
    return(
        <div class ='card'>
            <img src={props.character.image} />
            <h2>{props.character.name}</h2>
            <p>Status : {props.character.status}</p>
        </div>
    );
}

export default Character;