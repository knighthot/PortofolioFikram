import React, { useEffect,useState } from 'react';
import  '../assets/css/Black2.css';
import fikram from '../assets/image/fikramwithbingkai.png';
import { Link } from 'react-router-dom';
const Black1 = () => {
 

    const getRandomPosition = () => {
        const min = 10; // Minimum position percentage from top/left
        const max = 90; // Maximum position percentage from top/left
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };


    return (
        <div className="containerblack1">
             
        
            <div className="star" style={{ top: `${getRandomPosition()}%`, left: `${getRandomPosition()}%` }}></div>
            <div className="star" style={{ top: `${getRandomPosition()}%`, left: `${getRandomPosition()}%` }}></div>
            <div className="star" style={{ top: `${getRandomPosition()}%`, left: `${getRandomPosition()}%` }}></div>
            <div className="star" style={{ top: `${getRandomPosition()}%`, left: `${getRandomPosition()}%` }}></div>
            <div className="star" style={{ top: `${getRandomPosition()}%`, left: `${getRandomPosition()}%` }}></div>
            <div className="star" style={{ top: `${getRandomPosition()}%`, left: `${getRandomPosition()}%` }}></div>
            <div className="star" style={{ top: `${getRandomPosition()}%`, left: `${getRandomPosition()}%` }}></div>
            <div className="star" style={{ top: `${getRandomPosition()}%`, left: `${getRandomPosition()}%` }}></div>
            <div className="star" style={{ top: `${getRandomPosition()}%`, left: `${getRandomPosition()}%` }}></div>
            <div className="star" style={{ top: `${getRandomPosition()}%`, left: `${getRandomPosition()}%` }}></div>
            <div className="star" style={{ top: `${getRandomPosition()}%`, left: `${getRandomPosition()}%` }}></div>
            <div className="star" style={{ top: `${getRandomPosition()}%`, left: `${getRandomPosition()}%` }}></div>
            <div className="star" style={{ top: `${getRandomPosition()}%`, left: `${getRandomPosition()}%` }}></div>
            <div className="star" style={{ top: `${getRandomPosition()}%`, left: `${getRandomPosition()}%` }}></div>
            <div className="star" style={{ top: `${getRandomPosition()}%`, left: `${getRandomPosition()}%` }}></div>
            <div className="star" style={{ top: `${getRandomPosition()}%`, left: `${getRandomPosition()}%` }}></div>
            <div className="star" style={{ top: `${getRandomPosition()}%`, left: `${getRandomPosition()}%` }}></div>
            <div className="star" style={{ top: `${getRandomPosition()}%`, left: `${getRandomPosition()}%` }}></div>
            <div className="star" style={{ top: `${getRandomPosition()}%`, left: `${getRandomPosition()}%` }}></div>
            <div className="star" style={{ top: `${getRandomPosition()}%`, left: `${getRandomPosition()}%` }}></div>
            <div className="star" style={{ top: `${getRandomPosition()}%`, left: `${getRandomPosition()}%` }}></div>
            <div className="star" style={{ top: `${getRandomPosition()}%`, left: `${getRandomPosition()}%` }}></div>
            <div className="star" style={{ top: `${getRandomPosition()}%`, left: `${getRandomPosition()}%` }}></div>
            <div className="star" style={{ top: `${getRandomPosition()}%`, left: `${getRandomPosition()}%` }}></div>
            <div className="star" style={{ top: `${getRandomPosition()}%`, left: `${getRandomPosition()}%` }}></div>
            <div className="star" style={{ top: `${getRandomPosition()}%`, left: `${getRandomPosition()}%` }}></div>
            <div className="star" style={{ top: `${getRandomPosition()}%`, left: `${getRandomPosition()}%` }}></div>
            <div className="star" style={{ top: `${getRandomPosition()}%`, left: `${getRandomPosition()}%` }}></div>
            <div className="star" style={{ top: `${getRandomPosition()}%`, left: `${getRandomPosition()}%` }}></div>
            <div className="star" style={{ top: `${getRandomPosition()}%`, left: `${getRandomPosition()}%` }}></div>
            <p className="center-text-black2">congratulations</p>
            <p className="center-text-black2" id='small-font'>you have cleared all the levels !!you can go back to any level you wantor contact me for work or maybe we can have a cup of coffee and discuss about more games !! </p>
            <a href="https://drive.google.com/drive/folders/1McG-lKd0tibRqroixRfYPr0HK4EkWdnZ?usp=sharing" download>
                <button className="download-button">Download CV</button>
                 <Link to="/">
                <button className="download-button" id='back'>Back to Maingate</button>
            </Link>
            </a>
        </div>
    );
};

export default Black1;
