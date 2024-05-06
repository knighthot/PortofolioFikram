import React, { useEffect,useState } from 'react';
import  '../assets/css/App.css';
import {useNavigate } from 'react-router-dom';
import facebook from '../assets/image/facebook.png';
import ig from '../assets/image/ig.png';
import inimg from '../assets/image/in.png';
const SocialLink = ({ href, alt, src }) => (
    <a href={href} >
        <img src={src} alt={alt} />
    </a>
);

const Maingate = () => {
    const navigate = useNavigate();
    const [showSplash, setShowSplash] = useState(true);
    const handleStartClick = () => {
        
        navigate('/v1');
        
    
    };

    return (
        <div className="container">
            <div className="container_welcome">
            <h1 className="welcome" data-text="Welcome!!" >Welcome!!</h1>
            <h2 className="welcome" data-text="to my portfolio" id='jarak'>to my portfolio</h2>
            <p className="tagline">Press play to</p>
            <p className="tagline"> Enter story mode</p>
            <button className='pixel2' onClick={handleStartClick}>
                start
            </button>
            <div className="space">
            <SocialLink href="https://www.facebook.com/profile.php?id=100012872178615" src={facebook} alt="Facebook" />
                    <SocialLink href="www.linkedin.com/in/fikramul-bizli-3731781b1" src={inimg} alt="LinkedIn" />
                    <SocialLink href="https://www.instagram.com/_kammm30/" src={ig} alt="Instagram" />
            </div>
            </div>
        </div>
    );
};

export default Maingate;
