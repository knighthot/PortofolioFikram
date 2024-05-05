import React, { useEffect,useState } from 'react';
import  '../assets/css/Skill.css';
import js from '../assets/image/js.png';
import vite from '../assets/image/vite.png';
import Typescript from '../assets/image/Typescript.png';
import nodejs from '../assets/image/nodejs.jpg';
import figma from '../assets/image/figma.png';
import django from '../assets/image/django.png';
import c from '../assets/image/c++.png';
import python from '../assets/image/Python.png';
import Reactimg from '../assets/image/React.png';
import sql from '../assets/image/sql.png';
import firebase from '../assets/image/firebase.png';


const Skill = () => {
    const [images, setImages] = useState([]);

    

    const getRandomPosition = () => {
        const min = 10; // Minimum position percentage from top/left
        const max = 90; // Maximum position percentage from top/left
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };


    return (
        <div className="containerskill">
    
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
            

            <img className="floating-image image1" src={js} alt="Skill Image 1" />
            <img className="floating-image image2" src={vite} alt="Skill Image 2" />
            <img className="floating-image image3" src={nodejs} alt="Skill Image 3" />
            <img className="floating-image image4" src={Typescript} alt="Skill Image 4" />
            <img className="floating-image image5" src={figma} alt="Skill Image 5" />
            <img className="floating-image image6" src={django} alt="Skill Image 6" />
            <img className="floating-image image7" src={c} alt="Skill Image 7" />
            <img className="floating-image image8" src={python} alt="Skill Image 8" />
            <img className="floating-image image9" src={Reactimg} alt="Skill Image 9" />
            <img className="floating-image image10" src={sql} alt="Skill Image 10" />
            <img className="floating-image image11" src={firebase} alt="Skill Image 11" />
          
        </div>
    );
};

export default Skill;
