import React, { useState } from 'react';

const CharacterCount = () => {
    const [ text, setText ] = useState('');

    return (
        <div>
            <textarea onChange={(e) => { setText(e.target.value); }} />
            <span style={{'color': text.length > 10 ? 'red' : 'black'}}>
                {text.length}
            </span>
        </div>
    );
};

export default CharacterCount;
