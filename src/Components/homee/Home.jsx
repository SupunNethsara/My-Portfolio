import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
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
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import './Home.css';

export const Home = () => {
  return (
    <>
      <div className="social-media">
        <ul className='list'>
          <li><FontAwesomeIcon icon={faFacebook} /></li>
          <li><FontAwesomeIcon icon={faGithub} /></li>
          <li><FontAwesomeIcon icon={faWhatsapp} /></li>
          <li><FontAwesomeIcon icon={faInstagram} /></li>
        </ul>
      </div>
    
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
            <p>With over 2+ Years of experience as a freelance video editor, I bring stories to life through compelling visuals and seamless storytelling. My passion for filmmaking and content creation drives me to craft engaging videos that captivate audiences. Whether it’s editing dynamic vlogs, promotional content, or cinematic short films, wedding films, I thrive on collaborating with clients to transform their visions into reality. Let’s create something amazing together!</p>

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
            <div className='cv' style={{ display: 'flex' }}>
              <button>CV Downlod</button>
              <button>More</button>
            </div>
            <div className="circle-text mx-auto xl:mx-0 my-6">
              <Link href={'#'} className="relative w-[165px] h-[165px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group">
                <img
                  src="/rounded-text.png"
                  width={121}
                  height={128}
                  alt="Spinning Image"
                  className="animate-spin-slow w-full max-w-[121px] max-h-[128px]"
                />
                {/* Centered arrow inside the image */}
                <ArrowRightAltIcon className="absolute text-4xl group-hover:translate-x-2 transition-ll duration-300" />
              </Link>
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
     
        </div>
        <div className='top-right-image absolute right-0 bottom-0 z-10 w-[200px] xl:w-[400px] mix-blend-color-dodge '>
            <img src="/top-right-image.png" alt="" />
          </div>
      </div>
     
    </>
  )
}
