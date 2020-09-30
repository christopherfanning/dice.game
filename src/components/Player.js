import React from 'react';
import './Player.css';


const Player = (props) => {
    return (
        <div className={ props.nameMe }>
            <h2>I'm a player!</h2>
        </div>
    )
}

export default Player
