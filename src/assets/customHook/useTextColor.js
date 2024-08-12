import { useState } from 'react';

const useTextColor = (initialColor = 'black') => {
    const [color, setColor] = useState(initialColor);

    const changeColor = (newColor) => {
        setColor(newColor);
    };

    return [color, changeColor]; 
};

export default useTextColor;
