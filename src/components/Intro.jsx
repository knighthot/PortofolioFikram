import React, { useEffect, useState } from 'react';
import '../assets/css/Intro.css';
import { useNavigate } from 'react-router-dom';
import fikram from '../assets/image/fikramwithbingkai.png';
import astronot from '../assets/image/astronot.png';
const Intro = () => {
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

    return (
        <div className="container-intro">
            <div className="background-top"></div>
            <div className="background-image"></div>
            <div className={`left-image  ${isRocketLanded ? 'rocket-landing' : ''} ${isScrolled ? 'rocket-fly-away' : ''}`}>
                <img className="rocket-image" src={fikram} alt="" />
            </div>
            <div className="right-content">
                <h1>Welcome!</h1>
                <p>Welcome to my digital creative world! I am <span>Fikramul Bizli</span>, a mobile app developer, web developer, and UI/UX design. With my deep focus on mobile software development, I am ready to turn innovative ideas into reality at your fingertips</p>
            </div>
            <div className="bottom-right-image">
                <img src={astronot} alt="Bottom Right Image" />
            </div>
            <div className="background-bottom"></div>
        </div>
    );
};

export default Intro;
