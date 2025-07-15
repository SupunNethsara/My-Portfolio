import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import ScrollReveal from 'scrollreveal';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import './Home.css';
import ParticlesBackground from './ParticlesBackground';
import { RiReactjsLine } from 'react-icons/ri';
import { SiFirebase } from 'react-icons/si';

export const Home = () => {

  const [isDownloded, setIsDownloaded] = useState(false);
  const handleDownload = () => {
    setIsDownloaded(true);
    const link = document.createElement('a');
    link.href = '/path/to/your/CV.pdf';
    link.download = 'Supun_Nethsara_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  }

  const handleClose = () => {
    setOpen(false);
  };
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      navigate('/about');
    }, 2000);
  };

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
      <ParticlesBackground />
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
              <p className='text-gray-100/80 font-medium text-sm md:text-base md:text-gray-100/70 mt-6'>With over 4 years of experience as a freelance web developer, I specialize in creating dynamic and user-friendly websites that bring ideas to life. Currently pursuing a Bachelor of Information Technology (BIT) degree at the University of Colombo, I have a strong passion for front-end development, especially with frameworks like React and Angular. My expertise spans full-stack development, and I thrive on transforming concepts into functional, visually appealing web applications. Let’s collaborate to build exceptional digital experiences together!</p>

            </div>

            <div className="mt-3">
           
              import {RiReactjsLine} from 'react-icons/ri';
              import {SiFirebase} from 'react-icons/si';

              <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                {[
                  'React', 'laravel', 'JavaScript', 'TypeScript', 'Cloudinary', 'next.js',
                  'Node.js', 'Firebase', 'Tailwind CSS', 'mySQL', 'Redux',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-gray-800/50 border border-gray-700 text-gray-200 hover:bg-gray-700/50 hover:text-white hover:border-red-400/50 transition-all flex items-center"
                  >
                    {skill}

                    {skill === 'React' && <RiReactjsLine className="ml-1.5 text-blue-400" />}
                    {skill === 'Firebase' && <SiFirebase className="ml-1.5 text-orange-400" />}
                  </span>
                ))}
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
