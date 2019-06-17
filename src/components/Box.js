import React, { useState, useEffect } from 'react';

const Box = ({ item }) => {
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        const singular = count === 1;
        document.title = (
            `There ${singular ? 'is' : 'are'} currently ${count}
            ${singular ? item : item + 's'} in the box`
        );
    });

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    );
};

export default Box;
