import React, { useEffect } from 'react';
import Navbar from "./Nabar";
import Quote from "./Quote";
import useTextColor from "./assets/customHook/useTextColor";
import "./App.css";

const App = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            alert('Welcome To Rishi Jain Quotes Page');
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const [color, setColor] = useTextColor('white'); 

    return (
        <>
            <Navbar changeColor={setColor} />
            <Quote color={color} />
        </>
    );
}

export default App;
