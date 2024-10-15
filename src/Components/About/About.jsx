import React, { useState, useEffect } from 'react';
import './About.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { NavLink, Outlet ,Link } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
export const About = () => {
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [certifications, setCertifications] = useState(0);
  const [experience, setExperience] = useState(0);

  useEffect(() => {
    const experienceInterval = setInterval(() => {
      setExperience((prev) => {
        if (prev < 4) return prev + 1;
        clearInterval(experienceInterval);
        return prev;
      });
    }, 500);

    const clientsInterval = setInterval(() => {
      setClients((prev) => {
        if (prev < 20) return prev + 1;
        clearInterval(clientsInterval);
        return prev;
      });
    }, 100);

    const projectsInterval = setInterval(() => {
      setProjects((prev) => {
        if (prev < 50) return prev + 1;
        clearInterval(projectsInterval);
        return prev;
      });
    }, 50);

    const certificationsInterval = setInterval(() => {
      setCertifications((prev) => {
        if (prev < 3) return prev + 1;
        clearInterval(certificationsInterval);
        return prev;
      });
    }, 500);

    return () => {
      clearInterval(experienceInterval);
      clearInterval(clientsInterval);
      clearInterval(projectsInterval);
      clearInterval(certificationsInterval);
    };
  }, []);

  // Tabs movement
  const [value, setValue] = useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className='about-container'>
        <div className="profile-details">
          <div className="content">
            <h1>Supun Nethsara</h1>
            <h2>Undergraduate Student & <span>Full Stack Developer</span></h2>
            <p>
              Bringing ideas to life through clean code and intuitive design. <br />
              4 years ago, I began freelancing as a web developer. Since then, I’ve worked with clients on a range of web projects, specializing in front-end technologies like React and Angular. I’m passionate about delivering exceptional user experiences and scalable solutions that help businesses thrive online.
            </p>
            <div className='achievements-sec'>
              <div className='achievement'>
                <h3>{experience}+</h3>
                <p>Years<br />Experience</p>
              </div>
              <div className='achievement'>
                <h3>{clients}+</h3>
                <p>Satisfied<br /> Clients</p>
              </div>
              <div className='achievement'>
                <h3>{projects}</h3>
                <p>Completed<br /> Projects</p>
              </div>
              <div className='achievement'>
                <h3>{certifications}</h3>
                <p>Technology <br />Certifications</p>
              </div>
            </div>
            <div className="circle-text mx-auto xl:mx-0 my-6">
              <Link href={'#'} className="relative w-[165px] h-[165px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group">
                <img
                  src="./rounded-text.png"
                  width={121}
                  height={128}
                  alt="Spinning Image"
                  className="animate-spin-slow w-full max-w-[121px] max-h-[128px]"
                />
                {/* Centered arrow inside the image */}
                <ArrowRightAltIcon sx={{color:'#ffffff'}} className="absolute text-4xl group-hover:translate-x-2 transition-ll duration-300" />
              </Link>
            </div>
          </div>
        </div>
        <div className="about-edu-exp">
          <div className='edu-content'>
            <div className="about-nav">
              <Box sx={{ width: '100%' }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  textColor="inherit"
                  indicatorColor="primary"
                  aria-label="custom tabs example"
                  sx={{
                    '.MuiTabs-indicator': { backgroundColor: '#ffffff' },
                    '.MuiTab-root': { color: '#ffffff' },
                    '.Mui-selected': { color: '#ff0000', fontWeight: 'bold' },
                    '.MuiTab-root:hover': { color: '#928e9c' },
                  }}
                >
                  <Tab 
                    component={NavLink} 
                    to="/about" // Adjust this path to your route setup
                    value="one" 
                    label="Skills" 
                    sx={{ textDecoration: 'none' }} // Optional: remove underline on link
                  />
                  <Tab 
                    component={NavLink} 
                    to="/about/technology" 
                    value="two" 
                    label="Technologies" 
                    sx={{ textDecoration: 'none' }} // Optional: remove underline on link
                  />
                  <Tab 
                    component={NavLink} 
                    to="/about/experience" 
                    value="three" 
                    label="Experiences" 
                    sx={{ textDecoration: 'none' }} // Optional: remove underline on link
                  />
                  <Tab 
                    component={NavLink} 
                    to="/about/education" 
                    value="four" 
                    label="Educations" 
                    sx={{ textDecoration: 'none' }} // Optional: remove underline on link
                  />
                </Tabs>
              </Box>
            </div>
            <div className="about-drawer">
              <Outlet /> {/* Render the nested routes here */}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Image */}
      <div className='top-right-image absolute right-0 bottom-0 z-10 w-[200px] xl:w-[400px] mix-blend-color-dodge'>
        <img src="/circles.png" alt="Decorative" />
      </div>
    </>
  );
};

export default About;
