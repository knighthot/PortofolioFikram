import React, { useState, useEffect } from 'react';
import '../assets/css/Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import projectimg from '../assets/image/project.png';
import sipedina from '../assets/image/sipedina.png';
import ttg from '../assets/image/ttg.jpg';
import doktor from '../assets/image/astronot.png';
const Project = () => {
    // Daftar gambar yang akan ditampilkan
    const images = [
      
        { src: sipedina, info: 'Sipedina Adalah Aplikasi Peringatan Dini Bencana Kab.bintan', link: 'https://www.google.com' },
        { src: ttg, info: 'Smart Car Parking Berbasis IoT', link: 'https://www.instagram.com/p/CpcmmG6jmKO/' }

    ]; // Tambahkan gambar-gambar dan informasi lain di sini

    // State untuk menyimpan index gambar yang sedang ditampilkan
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fungsi untuk menampilkan gambar berikutnya
    const nextImage = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        // Set interval untuk mengganti gambar setiap 3 detik
        const interval = setInterval(nextImage, 5000);

        // Membersihkan interval saat komponen dibongkar
        return () => clearInterval(interval);
    }, [currentIndex]); // Jangan lupa tambahkan currentIndex sebagai dependency

    return (
        <div className="container-project">
            <div className="project-background-top"></div>
            <div className="project-background-bottom"></div>
            <div className="project-content">
                <h2>explore my projects</h2>
                <div className="project-bottom-right-image">
                <img src={doktor} alt="Bottom Right Image" />
            </div>
                <div className="project-image">
                    <img src={projectimg} alt="Project Image" />
                    <img src={images[currentIndex].src} alt="Project Image" />
                    <div className="image-info">{images[currentIndex].info}</div>
                    <button className="button" onClick={() => window.location.href = images[currentIndex].link}>Lihat Detail</button>
                </div>
            </div>
            
        </div>
    );
};

export default Project;
