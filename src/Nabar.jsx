import React from 'react';
import './assets/navbar.css';

const Navbar = ({ changeColor }) => {
    return (
        <div className="container">
            <div> Choose The Text Color</div>
            <div className="content">
                <div className="red" onClick={() => changeColor('red')}>Red</div>
                <div className="yellow" onClick={() => changeColor('yellow')}>Yellow</div>
                <div className="orange" onClick={() => changeColor('orange')}>Orange</div>
                <div className="white" onClick={() => changeColor('white')}>White</div>
            </div>
        </div>
    );
};

export default Navbar;
