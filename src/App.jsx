import React, { useState } from 'react'; // Import React here
import './App.css';
import { FaHome, FaUser, FaProjectDiagram, FaChartBar, FaComment, FaEnvelope } from 'react-icons/fa';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Home } from './Components/home/Home';
import { About } from './Components/About/About';
import { Services } from './Components/Servicess/Services';
import { Portfolio } from './Components/Portfolio/Portfolio';
import { Contact } from './Components/Contact/Contact';
import { Skills } from './Components/About/Datatabs/Skills/Skills';
import { Eduacion } from './Components/About/Datatabs/Education/Eduacion';
import { Experience } from './Components/About/Datatabs/Experience/Experience';
import { Technology } from './Components/About/Datatabs/technologies/Technology';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faWhatsapp, faInstagram, faAccessibleIcon } from '@fortawesome/free-brands-svg-icons';
import 'remixicon/fonts/remixicon.css';
import All from './Components/Portfolio/Component-portfolio/All';
import Webapp from './Components/Portfolio/Component-portfolio/Webapp';
import Userdesign from './Components/Portfolio/Component-portfolio/Userdesign';
import Webdesign from './Components/Portfolio/Component-portfolio/Webdesign';
import { fontSize } from '@mui/system';
import Feedbacks from './Components/Feedbacks/Feedbacks';
function App() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");

  const menus = [
    { name: "Home", link: "/", icon: FaHome },
    { name: "About", link: "/about", icon: FaUser },
    { name: "Services", link: "/services", icon: FaProjectDiagram },
    { name: "Portfolio", link: "/portfolio", icon: FaChartBar },
    { name: "Feedbacks", link: "/feedbacks", icon: FaComment },
    { name: "Contact", link: "/contact", icon: FaEnvelope },
  ];

  return (
    <BrowserRouter>
      <div className="main">

        <div className={`sidebar ${open ? "open" : ""}`}>
          <ul className="menu">
            {menus.map((menu, i) => (
              <li key={i}>
                <Link
                  to={menu.link}
                  onClick={() => setActiveMenu(menu.name)}
                  className={`menu-item ${activeMenu === menu.name ? "active" : ""}`}
                >
                  <div className="icon-container">
                    {React.createElement(menu.icon, {

                      className: "icon",
                      color: activeMenu === menu.name ? "#fa3e5e" : "#ffffff",
                    })}
                  </div>
                  {/* Tooltip */}
                  <span style={{ fontSize: '13px' }} className={`tooltip ${open ? "hidden" : ""}`}>
                    {menu.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="drawer">
          <div className="social-media">
            <div className="logo flex items-center">
              <img
                src="MyLogo.png"
                alt="Your Logo"
                className="h-20  md:w-28 md:h-28 transition-all hover:scale-105"
              />
            </div>
            <ul className='list'>
              <li><FontAwesomeIcon icon={faFacebook} /></li>
              <li><FontAwesomeIcon icon={faGithub} /></li>
              <li><FontAwesomeIcon icon={faWhatsapp} /></li>
              <li><FontAwesomeIcon icon={faInstagram} /></li>
            </ul>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}>
              <Route index element={<Skills />} />
              <Route path="education" element={<Eduacion />} />
              <Route path="experience" element={<Experience />} />
              <Route path="technology" element={<Technology />} />
            </Route>
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />}>
              <Route index element={<All />} />
              <Route path="webapp" element={<Webapp />} />
              <Route path="website" element={<Webdesign />} />
              <Route path="userdesign" element={<Userdesign />} />
            </Route>
            <Route path="/feedbacks" element={<Feedbacks />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>


        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
