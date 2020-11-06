import React from 'react';
import './SmallSquare.css';

function SmallSquare(props) {
    return (
        <div className={props.value === 0 ? 'EmptySquare' : 'FillSquare'} onClick={() => props.clickHandler(props.value)}>
            {props.value}
        </div>
    )
}

export default SmallSquare;