import React from 'react';
import '../assets/css/Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import astronot from '../assets/image/astronot.png';
import backgroundform from '../assets/image/backgroundform.png';
import ufo from '../assets/image/ufo.png';
import emailjs from 'emailjs-com';
import facebook from '../assets/image/facebook.png';
import ig from '../assets/image/ig.png';
import inimg from '../assets/image/in.png';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_w6bsok6', 'template_0vxkv0s', e.target, 'vG60h6ifDnLaD3Dpn')
            .then((result) => {
                toast.success('Email has been sent successfully!');
            }, (error) => {
                toast.error('Failed to send email!');
            });
    };
    return (
        <div className="container-contact">
            <div className="background-top-contact"></div>
            <div className="background-image-contact"></div>
            <ToastContainer />
            <div className="bottom-right-image-contact astronot">
                <img src={astronot} alt="Bottom Right Image" />
            </div>
            <form className="email-form" onSubmit={sendEmail}>
            <input type="hidden" name="to_name" value="Fikram" />
            <input type="hidden" name="from_name" value="Visitor" />
            <input type="hidden" name="reply_to" value="visitor@example.com" />
            <input type="text" name="subject" placeholder="Subject" />
            <textarea name="message" placeholder="Message"></textarea>
            <button type="submit">Send</button>
        </form>
            {/* Tambahkan gambar di tengah */}
            <div className="center-image-contact">
                <img src={backgroundform} alt="Center Image 1" />
                <div className="image-text-contact">Contact Me</div>
                
            </div>

            {/* Tambahkan gambar di kiri atas */}
            <div className="top-left-image-contact ufo">
                <img src={ufo} alt="Top Left Image" />
            </div>


            <div className="social-media-icons">
                <a href="https://www.facebook.com"><img src={facebook} alt="Facebook" /></a>
                <a href="https://www.twitter.com"><img src={inimg} alt="LinkIn" /></a>
                <a href="https://www.instagram.com"><img src={ig} alt="Instagram" /></a>
            </div>
           
            
            <div className="background-bottom-contact"></div>
        </div>
    );
};

export default Contact;
