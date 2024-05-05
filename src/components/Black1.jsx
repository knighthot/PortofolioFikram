import React, { useEffect,useState } from 'react';
import  '../assets/css/Black1.css';
import fikram from '../assets/image/fikramwithbingkai.png';

const Black1 = () => {
    const [isRocketLanded, setIsRocketLanded] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 0); // Set isScrolled to true if scrollTop is greater than 0
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        // Animate rocket landing when the component first mounts
        const timer = setTimeout(() => {
            setIsRocketLanded(true);
        }, 500); // Set the delay as needed

        return () => clearTimeout(timer);
    }, []);

    const getRandomPosition = () => {
        const min = 10; // Minimum position percentage from top/left
        const max = 90; // Maximum position percentage from top/left
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };


    return (
        <div className="containerblack1">
              <div className={`left-image1  ${isScrolled ? 'rocket-fly-away1' : ''}`}>
                <img className="rocket-image1" src={fikram} alt="" />
               
            </div> 
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
            <p className="center-text">explore my skills</p>
        </div>
    );
};

export default Black1;
