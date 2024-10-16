import React, { useState } from 'react'; // Import React here
import './App.css';
import { FaHome, FaUser, FaProjectDiagram, FaChartBar, FaEnvelope } from 'react-icons/fa';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Home } from './Components/homee/Home';
import { About } from './Components/About/About';
import { Services } from './Components/Servicess/Services';
import { Portfolio } from './Components/Portfolio/Portfolio';
import { Contact } from './Components/Contact/Contact';
import { Skills } from './Components/About/Datatabs/Skills/Skills';
import { Eduacion } from './Components/About/Datatabs/Education/Eduacion';
import { Experience } from './Components/About/Datatabs/Experience/Experience';
import { Technology } from './Components/About/Datatabs/technologies/Technology';


function App() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");

  const menus = [
    { name: "Home", link: "/", icon: FaHome },
    { name: "About", link: "/about", icon: FaUser },
    { name: "Services", link: "/services", icon: FaProjectDiagram },
    { name: "Portfolio", link: "/portfolio", icon: FaChartBar },
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
                  <span className={`tooltip ${open ? "hidden" : ""}`}>
                    {menu.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="drawer">
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} >
            <Route index element={<Skills/>} />
              <Route path="education" element={<Eduacion/>} />
              <Route path="experience" element={<Experience />} />
              <Route path="technology" element={<Technology />} />
         
             </Route>
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          
        </div>
     
      </div>
    </BrowserRouter>
  );
}

export default App;
