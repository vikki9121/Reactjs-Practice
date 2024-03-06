import React, { useState } from 'react';

function FavoriteColor() {
    const [color, setColor] = useState('Blue');

    return (
        <>
            <h1>My favorite color is {color}</h1>
            <button onClick={() => setColor('Red')}>Click Me</button>
        </>
    );
}

export default FavoriteColor;
