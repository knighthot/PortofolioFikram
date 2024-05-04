import React, { useEffect,useState } from 'react';
import  '../assets/css/App.css';
import {useNavigate } from 'react-router-dom';
const SocialLink = ({ href, alt }) => (
    <a href={href} >
        <img src={`https://placehold.co/30x30`} alt={alt} />
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
                <SocialLink href="#" alt="Facebook" />
                <SocialLink href="#" alt="Instagram" />
                <SocialLink href="#" alt="LinkedIn" />
            </div>
            </div>
        </div>
    );
};

export default Maingate;
