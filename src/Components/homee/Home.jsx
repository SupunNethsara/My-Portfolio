import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faWhatsapp, faInstagram, faAccessibleIcon } from '@fortawesome/free-brands-svg-icons';
import { Typewriter } from 'react-simple-typewriter';
// import softwareitem1 from '/assets/pngwing1.png';
import softwareitem1 from '/pngwing1.png';
import softwareitem2 from '/pngwing2.png';
import softwareitem3 from '/pngwing3.png';
import softwareitem4 from '/pngwing4.png';
import softwareitem5 from '/pngwing5.png';
import softwareitem6 from '/pngwing6.png';
import softwareitem7 from '/pngwing7.png';
import softwareitem8 from '/pngwing8.png';
import softwareitem9 from '/pngwing9.png';
import softwareitem10 from '/pngwing10.png';
import softwareitem11 from '/pngwing11.png';
import softwareitem12 from '/pngwing12.png';
import ScrollReveal from 'scrollreveal';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import './Home.css';

export const Home = () => {

  //Cv Download
  const [isDownloded, setIsDownloaded] = useState(false);
  const handleDownload = () => {
    setIsDownloaded(true);
    const link = document.createElement('a');
    link.href = '/path/to/your/CV.pdf'; // Update with your actual CV file path
    link.download = 'Supun_Nethsara_CV.pdf'; // The downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  }
  // Handle closing the backdrop
  const handleClose = () => {
    setOpen(false);
  };
  //Naviagte more button
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = () => {
    setOpen(true); // Open the backdrop
    setTimeout(() => {
      setOpen(false); // Close the backdrop
      navigate('/about'); // Navigate to the /about page
    }, 2000); // Delay for 2 seconds (you can adjust this)
  };

  //animation

  useEffect(() => {
    ScrollReveal().reveal('.text-section', {
      origin: 'bottom',
      distance: '40px',
      duration: 1000,
      reset: true,
      easing: 'ease-in-out'
    });
    ScrollReveal().reveal('.img-box', {
      origin: 'bottom',
      distance: '80px',
      duration: 2000,
      reset: true,
      easing: 'ease-in-out'
    });
  }, []);
  return (
    <>
      <div className='top-left-image'>
        <img src="/top-left-img.png" alt="" />
      </div>
      <Backdrop sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })} open={open} onClick={handleClose}><CircularProgress color="inherit" /></Backdrop>
      {/* <div className="social-media">
        <div className="logo">
          <h3>Supun<span>Nethsara</span></h3>
        </div>
        <ul className='list'>
          <li><FontAwesomeIcon icon={faFacebook} /></li>
          <li><FontAwesomeIcon icon={faGithub} /></li>
          <li><FontAwesomeIcon icon={faWhatsapp} /></li>
          <li><FontAwesomeIcon icon={faInstagram} /></li>
        </ul>
      </div> */}

      <div className="main-sec" >

        <div className="text">
          <div className="text-section">
            <h6>Hello I'm a</h6>
            <h5>Supun Nethsara</h5>
            <span className='typewrite'>
              <Typewriter
                words={['FullStack Developer', 'Frontend developer', 'WEB Developer']}
                loop={true}
                speed={100}
                delay={2000}
                cursor
              />
            </span>
            <div className='pera'>
              <p>With over 4 years of experience as a freelance web developer, I specialize in creating dynamic and user-friendly websites that bring ideas to life. Currently pursuing a Bachelor of Information Technology (BIT) degree at the University of Colombo, I have a strong passion for front-end development, especially with frameworks like React and Angular. My expertise spans full-stack development, and I thrive on transforming concepts into functional, visually appealing web applications. Let’s collaborate to build exceptional digital experiences together!</p>

            </div>

            <div className="software">
              <div className="software_item">
                <img src={softwareitem1} alt="" />
              </div>
              <div className="software_item">
                <img src={softwareitem2} alt="" />
              </div>
              <div className="software_item">
                <img src={softwareitem3} alt="" />
              </div>
              <div className="software_item">
                <img src={softwareitem4} alt="" />
              </div>
              <div className="software_item">
                <img src={softwareitem5} alt="" />
              </div>
              <div className="software_item">
                <img src={softwareitem6} alt="" />
              </div>

            </div>
            <div className="software">
              <div className="software_item">
                <img src={softwareitem7} alt="" />
              </div>
              <div className="software_item">
                <img src={softwareitem8} alt="" />
              </div>
              <div className="software_item">
                <img src={softwareitem9} alt="" />
              </div>
              <div className="software_item">
                <img src={softwareitem10} alt="" />
              </div>
              <div className="software_item">
                <img src={softwareitem11} alt="" />
              </div>
              <div className="software_item">
                <img src={softwareitem12} alt="" />
              </div>

            </div>
            <div className='cv' >
              <button onClick={handleDownload}> {isDownloded ? 'CV Downloaded' : 'Download CV'}</button>
              <button onClick={handleNavigate}>More</button>

            </div>

          </div>
        </div>
        <div className="image-container">

          <div className="img-box">
            <div className="img-item">
              <img src="/bg-remover.png" alt="" srcset="" />
          </div>
          </div>
          <div className="explosion-background">
            <img src="/bg-explosion.png" alt="" />
          </div>
          <div className='top-right-image absolute  right-0 bottom-0  z-10 w-[400px] xl:w-[400px] hidden sm:block  mix-blend-color-dodge '>
            <img src="/top-right-image.png" alt="" />
          </div>
        </div>

      </div>

    </>
  )
}
