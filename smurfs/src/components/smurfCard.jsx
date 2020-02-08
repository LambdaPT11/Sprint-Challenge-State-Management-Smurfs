import React from 'react';

const SmurfCard = (props) => {
    return (
        <>
            <div>
                <h3>{props.smurf.name}</h3>
                <p>age{}</p>
                <p>height{}</p>
            </div>
        </>
    )
} 

export default SmurfCard;