import React, { useEffect, useState } from 'react';
import '../assets/css/Loading.css';
import astronot from '../assets/image/astronot.png';
import dr from '../assets/image/akok.png';
import ufo from '../assets/image/ufo.png';
import { useNavigate } from 'react-router-dom';

const Loading = () => {
    const navigate = useNavigate();
    const [showSplash, setShowSplash] = useState(true);
    
    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setShowSplash(false);
        }, 5000);

    }, []);

    useEffect(() => {
        if (!showSplash) {
            navigate('./Portofolio'); // Change '/next-page' to the actual path of your next page
        }
    }, [showSplash, navigate]);


    const getRandomPosition = () => {
        const min = 10; // Minimum position percentage from top/left
        const max = 90; // Maximum position percentage from top/left
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    return (
        <div className={`containerloading ${showSplash ? 'show' : 'hide'}`}>
    <section class="loading-data">
        <h1>Initializing world</h1>
  <h2 class="loading-text text-center text-uppercase">
    <span class="char">.</span>
    <span class="char">.</span>
    <span class="char">.</span>
    <span class="char">.</span>
    <span class="char">!</span>
    <span class="char">!</span>
    <span class="char">!</span>
  </h2>
</section>
            {/* Stars */}
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

            {/* Add more stars as needed */}

            <img className="image-bottom-left" src={astronot} alt="Image 1" />
            <img className="image-top-right" src={ufo} alt="Image 2" />
            <img className="image-bottom-center" src={dr} alt="Image 3" />
        </div>
    );
};

export default Loading;
